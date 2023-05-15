'use client';
import { useState } from 'react';
import { FcFolder, FcOpenedFolder } from 'react-icons/fc';
import { Inter } from 'next/font/google';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] });

type Props = {
  ASCII: string;
  size: number;
};
const StructureIcon = ({ ASCII, size }: Props) => {
  return (
    <div
      className={`flex flex-col justify-center items-center  select-none `}
      style={{ width: size, fontSize: size }}
    >
      <span>{ASCII}</span>
    </div>
  );
};

export default StructureIcon;
