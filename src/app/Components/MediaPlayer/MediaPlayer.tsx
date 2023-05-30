'use client';
import ControlsSection from '@/app/Components/MediaPlayer/ControlsSection';
import { sharingInformationService } from '@/app/services/sharing-information.service';
import useHasWindow from '@/hooks/useHasWindow';
import { PlayerActions, VideoControls } from '@/interfaces';
import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const MediaPlayer = () => {
  const { hasWindow } = useHasWindow();

  const [videoControls, setVideoControls] = useState<VideoControls>({
    volume: 0.4,
    playing: true,
    loop: true,
    muted: true,
  });

  const player: PlayerActions = {
    getPlayerState: () => videoControls,
    play: () => {
      setVideoControls((st) => ({ ...st, playing: true }));
    },
    pause: () => {
      setVideoControls((st) => ({ ...st, playing: false }));
    },
    stop: () => {
      setVideoControls((st) => ({ ...st, playing: false }));
    },
    handleVolume: (value: number) => {
      setVideoControls((st) => ({ ...st, volume: value }));
    },
    handleMute: () => {
      setVideoControls((st) => ({ ...st, muted: !st.muted }));
    },
  };

  const subscription$ = sharingInformationService.getSubject();
  useEffect(() => {
    subscription$.subscribe((data: any) => {
      console.log('received data', data);
      player.handleVolume(data);
    });

    // return () => {
    //   subscription$.unsubscribe();
    // };
  }, []);

  return (
    <div className="bg-neutral-900 flex flex-col w-full h-full text-neutral-50">
      <div className="basis-4/6 flex p-none justify-center">
        {hasWindow && (
          <ReactPlayer
            height="100%"
            loop={videoControls.loop}
            playing={videoControls.playing}
            volume={videoControls.volume}
            muted={videoControls.muted}
            url="/video/sm-video.mp4"
          ></ReactPlayer>
        )}
      </div>
      <div className="bg-neutral-300 p-4 gap-4 flex flex-col basis-1/6">
        <div className="h-4 w-full bg-neutral-200 inlined "> </div>
        <ControlsSection actions={player} />
      </div>
      <div className="basis-1/6 text-lime-600 ">Somos_SocialMedia1989.avi</div>
    </div>
  );
};

export default MediaPlayer;
