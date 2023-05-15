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
      className={` w-full flex justify-between items-end   ${
        false ? 'w10-style' : 'w98-style'
      }`}
    >
      <div className="bg-neutral-400 p-1 outlined handle">
        <BiMove />
      </div>
      <div className="bg-neutral-400 p-1 outlined handle">
        <BiMove />
      </div>
    </div>
  );
};

export default FooterBar;
