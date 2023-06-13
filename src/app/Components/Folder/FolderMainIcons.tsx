'use client';
import DirectAccess from '@/app/Components/DirectAccess/DirectAccess';
import ExecutableIcon from '@/app/Components/Executable/Icon/ExecutableIcon';
import { getSlug } from '@/app/utilities/create-folder-structure';
import { FlatListItem } from '@/interfaces';
import Image from 'next/image';
import { useParams, usePathname } from 'next/navigation';
import React, { useState } from 'react';

const FolderMainIcons = ({ entries }: { entries: FlatListItem | null }) => {
  type OpenTabs = {
    [key: string]: boolean;
  };
  const [openTabs, setOpenTabs] = useState<OpenTabs>({});
  const params = useParams();
  const pathname = usePathname();
  console.log('entries >>>', entries?.children[0].attachement);

  return (
    <div className="flex items-start flex-wrap gap-4 p-4  ">
      {entries
        ? entries?.children?.map((child) => (
            <DirectAccess
              key={child.key}
              name={child.title}
              icon={child?.attachement?.icon?.mediaItemUrl || ''}
              route={`${getSlug(child?.url).pathname}/${
                getSlug(child?.url).slug
              }`}
            />
          ))
        : null}
    </div>
  );
};

export default FolderMainIcons;
