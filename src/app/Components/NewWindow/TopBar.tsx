import React, { MouseEvent } from 'react';
import {
  MdOutlineMinimize,
  MdClose,
  MdOutlineSquare,
  MdArrowBack,
} from 'react-icons/md';
import { useRouter } from 'next/navigation';

type Props = { folderName: string; backBtn?: boolean };
const TopBar = ({ folderName, backBtn = false }: Props) => {
  let router = useRouter();
  function close() {
    router.push('/');
  }
  function back() {
    router.back();
  }

  return (
    <div className="text-neutral-100 bg-neutral-950 flex justify-between items-center folder-top-bar">
      {/* FOLDER NAME */}
      <div className=" flex items-center folder-top-bar-text  self-stretch ">
        {backBtn ? (
          <div onClick={back} className="folder-top-bar-buttons_button  ">
            <MdArrowBack />
          </div>
        ) : null}
        <p className=" flex items-center folder-top-bar-text m-2">
          {folderName}
        </p>
      </div>
      {/* Folder actions */}
      <div className="flex justify-center self-stretch min-h-full  folder-top-bar-buttons">
        <div className="folder-top-bar-buttons_button">
          <MdOutlineMinimize />
        </div>

        <div className="folder-top-bar-buttons_button">
          <MdOutlineSquare />
        </div>

        <div onClick={close} className="folder-top-bar-buttons_button">
          <MdClose />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
