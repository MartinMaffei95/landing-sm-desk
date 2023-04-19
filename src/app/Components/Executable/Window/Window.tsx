import TopBar from '@/app/Components/NewWindow/TopBar';
import React from 'react';
type Props = {
  children: React.ReactNode;
  folderName: string;
};

const Window = ({ children, folderName = '' }: Props) => {
  return (
    <div
      className={`max-h-screen max-w-screen h-[60vh] w-[60vw] overflow-hidden bg-neutral-100 select-none absolute top-0 left-0`}
    >
      {/* TOP BAR */}
      <TopBar backBtn folderName={folderName} />
      <div className="flex h-full w-full bg-neutral-100 text-neutral-900 relative z-100">
        <div className="z-100 relative h-full w-full  overflow-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Window;
