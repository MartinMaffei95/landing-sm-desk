'use client';
import TopBar from '@/app/Components/NewWindow/TopBar';
import Image from 'next/image';
import React from 'react';

const LodaingComponent = () => {
  return (
    <div className="bg-gray-300 w-full  min-h-[30vh] outlined relative ">
      <TopBar folderName={'Cargando'} />
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
  );
};

export default LodaingComponent;
