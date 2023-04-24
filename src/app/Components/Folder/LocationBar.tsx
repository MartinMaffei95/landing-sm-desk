import React from 'react';
import { FcFolder } from 'react-icons/fc';
import { MdChevronRight } from 'react-icons/md';

const LocationBar = ({ adress }: { adress: string }) => {
  return (
    <div className="text-neutral-100 bg-neutral-900 flex w-full p-2">
      <div className="flex items-center justify-start border border-neutral-700 w-full p-1">
        <FcFolder />
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
