'use client';
import { useState } from 'react';
import { FcFolder, FcOpenedFolder } from 'react-icons/fc';
import { Inter } from 'next/font/google';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] });

type Props = {
  name?: string;
  icon_route?: string;
  action?: Function;
  size: number;
};
const Wicon = ({ name = '', icon_route, size, action = () => {} }: Props) => {
  return (
    <div
      className={`flex flex-col justify-center items-center  select-none `}
      style={{ width: size }}
    >
      <Image
        width={size}
        height={size}
        src={!!icon_route ? icon_route : '/ico/w98/ico/directory_closed.ico'}
        alt={`${name} icon`}
      />
      <p>{!!name ? name : null}</p>
    </div>
  );
};

export default Wicon;
