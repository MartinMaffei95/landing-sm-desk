import React, { useState } from 'react'
import { FcFolder } from 'react-icons/fc'
import { VscBlank } from 'react-icons/vsc'
import { MdChevronRight } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import { getSlug } from '@/app/utilities/create-folder-structure'
import Wicon from '@/app/Components/WIcon/Wicon'
import StructureIcon from '@/app/Components/WIcon/StructureIcon'
import { transformName } from '@/app/utilities/transform-title-name'

const AsideMenu = ({ entries }: { entries: any }) => {
  type OpenTabs = {
    [key: string]: boolean
  }
  console.log('entries >>>', entries)

  const [openTabs, setOpenTabs] = useState<OpenTabs>({})
  return (
    <div
      // W10
      // className="text-neutral-100 bg-neutral-900 basis-1/4"
      // W98
      className="text-neutral-950 bg-neutral-100  folder-aside border-r-2 border-r-neutral-500  overflow-scroll font-sans"
    >
      <ul className="h-full">
        {entries?.map((section: any) => (
          <li className="flex items-center gap-1 " key={section.key}>
            <div className="">
              <div
                onClick={() => {
                  console.log(section.key)
                  setOpenTabs((state) => ({
                    ...state,
                    [section.key]: !openTabs[section.key],
                  }))
                }}
                className={`flex items-center gap-1 capitalize ${
                  openTabs[section?.key] ? '' : ''
                }`}
              >
                {section.children ? (
                  <MdChevronRight
                    className={`${!openTabs[section?.key] ? 'rotate-90' : ''} `}
                  />
                ) : (
                  <VscBlank />
                )}
                <Wicon size={16} />
                <p className=" overflow-hidden truncate">
                  {transformName(section?.title)}
                </p>
              </div>
              {section?.children && !openTabs[section?.key] ? (
                <ul>
                  {section?.children?.map((child: any) => (
                    <li
                      className="flex flex-1  items-center gap-1 "
                      key={child?.key}
                    >
                      {child?.attachement?.icon?.mediaItemUrl ? (
                        <>
                          <VscBlank style={{ minWidth: 16 }} />
                          <VscBlank style={{ minWidth: 16 }} />

                          <Image
                            src={child?.attachement?.icon?.mediaItemUrl}
                            alt={`${child?.title} logo`}
                            width={16}
                            height={16}
                          />
                        </>
                      ) : (
                        <>
                          <VscBlank style={{ minWidth: 16 }} />
                          <VscBlank style={{ minWidth: 16 }} />
                          <Wicon size={16} />
                        </>
                      )}
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
  )
}

export default AsideMenu
