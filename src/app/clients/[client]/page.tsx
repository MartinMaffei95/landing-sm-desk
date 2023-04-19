'use client';
import Window from '@/app/Components/Executable/Window/Window';
import Image from 'next/image';
import React from 'react';

const page = ({ params }: { params: { client: string } }) => {
  return (
    <div>
      <Window folderName="COTO">
        <div className="flex justify-around gap-6 my-4 px-6 ">
          <h3 className="text-6xl basis-1/2 flex justify-center items-center text-right">
            Almacen digital
          </h3>
          <div className="basis-1/2 flex">
            <Image
              src={`/images/almacen_digital.jpeg`}
              alt={`Almacen digital`}
              width={250}
              height={250}
              style={{ flexBasis: '50%' }}
            />
          </div>
        </div>

        <div className="px-4 flex flex-col gap-4">
          <p>
            {` If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators on the Internet tend`}
          </p>
          <div className="flex items-center">
            <p>
              {` t the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.`}
            </p>
            <Image
              src={`/images/almacen-1.webp`}
              alt={`Almacen digital`}
              width={250}
              height={250}
            />
          </div>
          <div className="flex  items-center">
            <Image
              src={`/images/almacen_digital.jpeg`}
              alt={`Almacen digital`}
              width={250}
              height={250}
            />
            <p>
              {`to repeat predefined chunks as necessary, making this the first
              true generator on the Internet. It uses a dictionary of over 200
              Latin words, combined with a handful of model sentence structures,
              to generate Lorem Ipsum w`}
            </p>
          </div>
          <div>asdasdasd</div>

          <div>asdasdasd</div>
        </div>
      </Window>
    </div>
  );
};

export default page;
