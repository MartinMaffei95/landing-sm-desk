import React, { MouseEvent } from 'react';
import {
  MdOutlineMinimize,
  MdClose,
  MdOutlineSquare,
  MdArrowBack,
} from 'react-icons/md';
import { useRouter } from 'next/navigation';

import { BiMove } from 'react-icons/bi';
const FooterBar = () => {
  return (
    <div
      className={` w-full flex justify-between items-end bg-none absolute bottom-0 left-0 pointer-events-none ${
        false ? 'w10-style' : 'w98-style'
      }`}
    >
      <div className="bg-neutral-400 p-1 outlined handle pointer-events-auto">
        <BiMove />
      </div>
      <div className="bg-neutral-400 p-1 outlined handle pointer-events-auto">
        <BiMove />
      </div>
    </div>
  );
};

export default FooterBar;
