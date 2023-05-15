import React, { MouseEvent } from 'react';
import {
  MdOutlineMinimize,
  MdClose,
  MdOutlineSquare,
  MdArrowBack,
} from 'react-icons/md';
import { useRouter } from 'next/navigation';

type Props = {
  folderName: string;
  backBtn?: boolean;
  icon?: React.ReactNode;
  onClose?: 'close' | 'back' | Function;
};
const TopBar = ({
  folderName,
  backBtn = false,
  onClose = 'close',
  icon,
}: Props) => {
  let router = useRouter();
  function close() {
    router.push('/');
  }

  function back() {
    router.back();
  }

  const closeAction = () => {
    switch (onClose) {
      case 'close':
        close();
        break;
      case 'back':
        back();
        break;
      default:
        onClose();
        break;
    }
  };
  return (
    <div
      className={`folder-top-bar  handle ${false ? 'w10-style' : 'w98-style'}`}
    >
      {/* FOLDER NAME */}
      <div className=" flex items-center folder-top-bar-text  self-stretch ">
        {backBtn ? (
          <div onClick={back} className="folder-top-bar-buttons_button  ">
            <MdArrowBack />
          </div>
        ) : null}
        <div className=" flex items-center folder-top-bar-text m-2 gap-2">
          {icon ? <div className="h-8 w-8 relative">{icon}</div> : null}
          <p className="capitalize">{folderName}</p>
        </div>
      </div>
      {/* Folder actions */}
      <div className="flex justify-center self-stretch min-h-full  folder-top-bar-buttons">
        <div className="folder-top-bar-buttons_button">
          <MdOutlineMinimize />
        </div>

        <div className="folder-top-bar-buttons_button">
          <MdOutlineSquare />
        </div>

        <div onClick={closeAction} className="folder-top-bar-buttons_button">
          <MdClose />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
