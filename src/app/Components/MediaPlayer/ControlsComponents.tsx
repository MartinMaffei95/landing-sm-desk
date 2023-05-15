import Wicon from '@/app/Components/WIcon/Wicon';
import { PlayerActions } from '@/interfaces';
import React, { useState, ChangeEvent } from 'react';

export const IconBtn = ({
  children,
  extraCSS = '',
  clickAction = () => {},
}: {
  children: React.ReactNode;
  extraCSS?: string;
  clickAction?: Function;
}) => {
  return (
    <div
      onClick={() => clickAction()}
      className={`hover:bg-neutral-400 ${extraCSS}`}
    >
      {children}
    </div>
  );
};

export const VolumeComponent = ({ actions }: { actions: PlayerActions }) => {
  const [volume, setVolume] = useState<number>(0.4);
  const handleVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const valueN = Number(e.target.value);
    actions.handleVolume(volume);

    setVolume(valueN);
  };

  return (
    <div
      className="
            relative
            flex gap-2
        "
    >
      <IconBtn clickAction={() => actions.handleMute()} extraCSS="p-1">
        {!actions.getPlayerState().muted ? (
          <Wicon size={32} icon_route="/ico/w98/ico/loudspeaker_rays.ico" />
        ) : (
          <Wicon size={32} icon_route="/ico/w98/ico/loudspeaker_muted.ico" />
        )}
      </IconBtn>
      <div
        className="
            relative
            outlined
            border-l-transparent
            border-t-transparent
            "
      >
        <input
          type="range"
          className="volume-slider absolute bottom-0 left-0 w-full "
          onChange={handleVolume}
          min={0}
          max={1}
          step={0.1}
          value={volume}
        />
        <div
          className="w-0 h-0 
            border-l-[95px] border-l-transparent
            border-b-[30px] border-b-neutral-200 
            "
        ></div>
      </div>
    </div>
  );
};
