'use client';
import { sections } from '@/db/sections/sections.db';
import React from 'react';
import { FcFolder } from 'react-icons/fc';
import { VscBlank } from 'react-icons/vsc';
import { MdChevronRight } from 'react-icons/md';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import TopBar from '@/app/Components/NewWindow/TopBar';
import { Rnd } from 'react-rnd';

type Props = { children: React.ReactNode; folderName: string };
const Folder = ({ children, folderName = '' }: Props) => {
  let pathname = usePathname();

  return (
    <Rnd
      style={{
        width: '100%',
      }}
    >
      <div className={`min-w-full min-h-full overflow-hidden  select-none`}>
        {/* TOP BAR */}
        <TopBar folderName={folderName} />

        {/* LOCATION BAR */}
        <div className="text-neutral-100 bg-neutral-900 flex w-full p-2">
          <div className="flex items-center justify-start border border-neutral-700 w-full p-1">
            <FcFolder />
            <MdChevronRight />
            Clientes
            <MdChevronRight />
            Cliente1
          </div>
        </div>

        {/* FOLDER VIEW */}
        <div className="flex h-full w-full">
          {/* ASIDE MENU */}
          <div className="text-neutral-100 bg-neutral-900 basis-1/4">
            <ul>
              {sections?.map((section) => (
                <li className="flex items-center gap-1" key={section.id}>
                  <div>
                    <p className="flex  items-center gap-1">
                      {section.subSection ? (
                        <MdChevronRight
                          className={`${true ? 'rotate-90' : ''} `}
                        />
                      ) : (
                        <VscBlank />
                      )}
                      <FcFolder />
                      {section?.name}
                    </p>
                    {section?.subSection ? (
                      <ul>
                        {section?.subSection?.map((subSection, i) => (
                          <li className="flex  items-center gap-1" key={i}>
                            <VscBlank />
                            <VscBlank />
                            <FcFolder />
                            <Link href={`clients/${subSection?.id}`}>
                              {subSection?.id}
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
