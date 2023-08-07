import TopBar from '@/app/Components/NewWindow/TopBar'
import Image from 'next/image'
import React from 'react'
import {
  MdOutlineMinimize,
  MdClose,
  MdOutlineSquare,
  MdArrowBack,
} from 'react-icons/md'

const LoadingComponent = () => {
  return (
    <div className="bg-gray-300 w-full md:w-[40vw] min-h-[30vh] outlined relative ">
      <div
        className={`folder-top-bar  handle ${
          false ? 'w10-style' : 'w98-style'
        }`}
      >
        {/* FOLDER NAME */}
        <div className=" flex items-center folder-top-bar-text w-full self-stretch ">
          <div className=" flex items-center folder-top-bar-text m-2 gap-2">
            <p className="capitalize">Cargando ...</p>
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

          <div className="folder-top-bar-buttons_button">
            <MdClose />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full  p-2  relative  pt-8 gap-4">
        <div className="flex w-full items-center justify-center">
          <div className="relative w-8 h-8">
            <Image fill src="/clock.gif" alt="clock gfi" />
          </div>
          <p>Cargando los datos de la página</p>
        </div>

        <div className=" loadingBar">
          <div className="blueBar"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingComponent
