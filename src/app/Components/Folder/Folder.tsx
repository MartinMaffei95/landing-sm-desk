'use client';
import React, { useState } from 'react';
import { FcFolder } from 'react-icons/fc';
import { VscBlank } from 'react-icons/vsc';
import { MdChevronRight } from 'react-icons/md';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import TopBar from '@/app/Components/NewWindow/TopBar';
import { Rnd } from 'react-rnd';
import { getSlug } from '@/app/utilities/create-folder-structure';
import LocationBar from '@/app/Components/Folder/LocationBar';

type Props = { children: React.ReactNode; folderName: string; posts?: any };
const Folder = ({ children, folderName = '', posts }: Props) => {
  const [size, setSize] = useState({ width: 800, height: 450 });
  const [entries, setEntries] = useState(posts);
  let pathname = usePathname();
  let params = useParams();
  // console.log(pathname.endsWith(params?.slug));
  // console.log(params.slug);
  return (
    <Rnd
      style={{
        width: '70vw',
        position: 'absolute',
      }}
      disableDragging={pathname.endsWith(params?.slug)}
      size={{ width: size.width, height: size.height }}
      onResize={(e, direction, ref, delta, position) => {
        setSize({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });
      }}
    >
      <div
        className={`min-w-full min-h-full h-full overflow-hidden  select-none`}
      >
        {/* TOP BAR */}
        <TopBar folderName={folderName} />

        {/* LOCATION BAR */}
        <LocationBar adress={pathname} />

        {/* FOLDER VIEW */}
        <div className="flex h-full w-full">
          {/* ASIDE MENU */}
          <div className="text-neutral-100 bg-neutral-900 basis-1/4">
            <ul>
              {entries?.map((section: any) => (
                <li className="flex items-center gap-1" key={section.key}>
                  <div className="">
                    <div className="flex items-center gap-1 ">
                      {section.children ? (
                        <MdChevronRight
                          className={`${true ? 'rotate-90' : ''} `}
                        />
                      ) : (
                        <VscBlank />
                      )}
                      <FcFolder />
                      <p className="text-ellipsis overflow-hidden ">
                        {section?.title}
                      </p>
                    </div>
                    {section?.children ? (
                      <ul>
                        {section?.children?.map((child: any) => (
                          <li
                            className="flex  items-center gap-1 "
                            key={child?.key}
                          >
                            <VscBlank />
                            <VscBlank />
                            <FcFolder />
                            <Link
                              href={`${getSlug(child?.url).pathname}/${
                                getSlug(child?.url).slug
                              }`}
                            >
                              <span className="truncate ">{child?.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* MAIN VIEW */}
          <div className="text-neutral-100  basis-3/4 bg-neutral-800">
            {children}
          </div>
        </div>
      </div>
    </Rnd>
  );
};

export default Folder;
