'use client';
import FooterBar from '@/app/Components/NewWindow/FooterBar';
import TopBar from '@/app/Components/NewWindow/TopBar';
import useResize from '@/hooks/useResize';
import React from 'react';
import { Rnd } from 'react-rnd';

type Props = {
  children: React.ReactNode;
  folderName?: string;
  onClose?: 'close' | 'back' | Function;
  icon?: React.ReactNode;
  backBtn?: boolean;
  initPosition?: {
    width: number;
    height: number;
  };
};
const ExecutableContainer = ({
  children,
  folderName = '',
  onClose = 'close',
  icon,
  backBtn = false,
  initPosition = { width: 0, height: 0 },
}: Props) => {
  const { size, setSize } = useResize();

  return (
    <Rnd
      style={{
        position: 'absolute',
        overflow: 'hidden',
        pointerEvents: 'all',
      }}
      dragHandleClassName="handle"
      size={{ width: size.width, height: size.height }}
      // position={{ x: 0, y: screen.width  size.width }}
      onResize={(e, direction, ref, delta, position) => {
        setSize({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });
      }}
    >
      <div
        className={`min-w-full h-full overflow-hidden bg-neutral-100  select-none  flex flex-col folder-w98-style `}
      >
        <TopBar
          icon={icon}
          onClose={onClose}
          backBtn={backBtn}
          folderName={folderName}
        />
        {children}
        <FooterBar />
      </div>
    </Rnd>
  );
};

export default ExecutableContainer;
