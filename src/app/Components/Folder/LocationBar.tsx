import Wicon from '@/app/Components/WIcon/Wicon';
import React from 'react';
import { FcFolder } from 'react-icons/fc';
import { MdChevronRight } from 'react-icons/md';

const LocationBar = ({ adress }: { adress: string }) => {
  return (
    <div
      className={`flex w-full p-2 ${
        true
          ? 'text-neutral-950 bg-neutral-400'
          : 'text-neutral-100 bg-neutral-900'
      }`}
    >
      Direccion
      <div
        className={`flex items-center justify-start  w-full p-1 ${
          true ? 'inlined bg-neutral-100' : 'border border-neutral-700'
        }`}
      >
        <Wicon size={16} />

        <LocationText adress={adress} />
      </div>
    </div>
  );
};

export default LocationBar;

const LocationText = ({ adress }: { adress: string }) => {
  const parts = adress.split('/');

  return (
    <>
      {parts.map((slice, i) => (
        <>
          {!!slice ? (
            <>
              <MdChevronRight /> {slice}
            </>
          ) : null}
        </>
      ))}
    </>
  );
};
