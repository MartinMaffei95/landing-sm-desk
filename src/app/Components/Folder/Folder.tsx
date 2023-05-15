'use client';
import React, { useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import TopBar from '@/app/Components/NewWindow/TopBar';
import { Rnd } from 'react-rnd';
import LocationBar from '@/app/Components/Folder/LocationBar';
import AsideMenu from '@/app/Components/Folder/AsideMenu';
import useResize from '@/hooks/useResize';

type Props = { children: React.ReactNode; folderName: string; posts?: any };
const Folder = ({ children, folderName = '', posts }: Props) => {
  // const [size, setSize] = useState({ width: 800, height: 450 });
  const { size, setSize } = useResize();

  let pathname = usePathname();
  let params = useParams();
  return (
    <Rnd
      style={{
        // width: '70vw',
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'all',
      }}
      disableDragging={pathname.endsWith(params?.slug)}
      enableResizing={!pathname.endsWith(params?.slug)}
      dragHandleClassName="handle"
      size={{ width: size.width, height: size.height }}
      onResize={(e, direction, ref, delta, position) => {
        setSize({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });
      }}
    >
      <div
        className={`min-w-full  min-h-full h-full overflow-hidden  select-none folder-w98-style`}
      >
        {/* TOP BAR */}
        <TopBar folderName={folderName} />

        {/* LOCATION BAR */}
        <LocationBar adress={pathname} />

        {/* FOLDER VIEW */}
        <div className="flex h-full w-full">
          {/* ASIDE MENU */}
          <AsideMenu entries={posts} />
          {/* MAIN VIEW */}
          <div className="text-neutral-900  basis-3/4 bg-neutral-100 outlined">
            {children}
          </div>
        </div>
      </div>
    </Rnd>
  );
};

export default Folder;
