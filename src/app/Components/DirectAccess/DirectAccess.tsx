'use client';
import { useState } from 'react';
import { FcFolder, FcOpenedFolder } from 'react-icons/fc';
import { Inter } from 'next/font/google';
import { useRouter, usePathname } from 'next/navigation';
import Wicon from '@/app/Components/WIcon/Wicon';
const inter = Inter({ subsets: ['latin'] });

type Props = {
  name: string;
  icon?: string;
  route: string;
  //   open?: boolean;
};
const DirectAccess = ({ name, icon, route = '/' }: Props) => {
  let router = useRouter();
  const pathname = usePathname();
  const [select, setSelect] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(pathname === route);
  const handleSelect = () => {
    setSelect(!select);
  };
  const handleOpen = () => {
    setOpen(!open);
  };

  const openFolder = () => {
    router.push(`${route}`);
    handleOpen();
  };
  return (
    <div
      onClick={handleSelect}
      onDoubleClick={openFolder}
      className={`flex flex-col justify-center items-center  ${
        select ? 'bg-neutral-300 border-blue-400 border' : 'none'
      } bg-opacity-50 border-none px-4`}
    >
      <div
        className={`flex flex-col justify-center items-center w-full select-none`}
      >
        {icon ? (
          <Wicon name={name} size={48} icon_route={icon} />
        ) : pathname === route ? (
          <Wicon
            name={name}
            size={48}
            icon_route="/ico/w98/ico/directory_open.ico"
          />
        ) : (
          <Wicon
            name={name}
            size={48}
            icon_route="/ico/w98/ico/directory_closed.ico"
          />
        )}
      </div>
    </div>
  );
};

export default DirectAccess;
