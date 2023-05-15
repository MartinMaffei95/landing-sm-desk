'use client';
import {
  IconBtn,
  VolumeComponent,
} from '@/app/Components/MediaPlayer/ControlsComponents';
import { PlayerActions } from '@/interfaces';
import React from 'react';
import {
  BiPlay,
  BiPause,
  BiStop,
  BiRewind,
  BiFastForward,
  BiSkipNext,
  BiSkipPrevious,
  BiListUl,
} from 'react-icons/bi';

const ControlsSection = ({ actions }: { actions: PlayerActions }) => {
  return (
    <div className="text-neutral-950 text-4xl flex justify-between">
      <div className="flex">
        <div className="controls-box">
          <IconBtn clickAction={actions?.play}>
            <BiPlay />
          </IconBtn>
          <IconBtn clickAction={actions?.pause}>
            <BiPause />
          </IconBtn>
          <IconBtn clickAction={actions?.stop}>
            <BiStop />
          </IconBtn>
          <span className="divisor" />
        </div>
        <div className="controls-box">
          <BiSkipPrevious className="text-neutral-500" />
          <BiRewind className="text-neutral-500" />
          <BiFastForward className="text-neutral-500" />
          <BiSkipNext className="text-neutral-500" />
          <span className="divisor" />
        </div>
        <div className="controls-box">
          <BiListUl className="text-neutral-500" />
          <span className="divisor" />
        </div>
      </div>
      <VolumeComponent actions={actions} />
    </div>
  );
};

export default ControlsSection;
