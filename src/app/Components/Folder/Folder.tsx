'use client';
import React, { useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import TopBar from '@/app/Components/NewWindow/TopBar';
import { Rnd } from 'react-rnd';
import LocationBar from '@/app/Components/Folder/LocationBar';
import AsideMenu from '@/app/Components/Folder/AsideMenu';
import useResize from '@/hooks/useResize';
import FolderMainIcons from '@/app/Components/Folder/FolderMainIcons';
import { FlatListItem } from '@/interfaces';

type Props = {
  children: React.ReactNode;
  folderName: string;
  posts?: FlatListItem[];
  executables?: React.ReactNode;
};
const Folder = ({ children, folderName = '', posts, executables }: Props) => {
  // const [size, setSize] = useState({ width: 800, height: 450 });
  const { size, setSize } = useResize();

  let pathname = usePathname();
  let params = useParams();

  console.log();

  return (
    <Rnd
      style={{
        // width: '70vw',
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'all',
      }}
      disableDragging={pathname.endsWith(params?.slug as string)}
      enableResizing={!pathname.endsWith(params?.slug as string)}
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
        className={`min-w-full   h-full   select-none folder-w98-style  flex flex-col font-sans`}
      >
        {/* TOP BAR */}
        <TopBar folderName={folderName} />

        {/* LOCATION BAR */}
        <LocationBar adress={pathname} />

        {/* FOLDER VIEW */}
        <div className="folder-grid-area w-full max-h-full h-full overflow-hidden">
          {/* ASIDE MENU */}
          <AsideMenu entries={posts} />
          {/* MAIN VIEW */}
          <div
            className="text-neutral-900 h-full  bg-neutral-100 w-full overflow-scroll folder-main 
          "
          >
            <FolderMainIcons
              entries={
                posts?.find((entry: FlatListItem) =>
                  entry.title.includes(pathname.slice(1))
                ) || null
              }
            />
          </div>
        </div>
        {children}
        {/* <FooterBar /> */}
      </div>
    </Rnd>
  );
};

export default Folder;
