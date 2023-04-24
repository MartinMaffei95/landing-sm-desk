import React from 'react';
import { BsImage } from 'react-icons/bs';

const ImageSkeleton = () => {
  return (
    <div className="bg-gray-700 w-full h-full animate-pulse text-neutral-100 flex justify-center items-center text-8xl">
      <BsImage />
    </div>
  );
};

export default ImageSkeleton;
