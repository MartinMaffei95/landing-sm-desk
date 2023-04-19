import React from 'react';

type skeletonProps = { extraCss?: string };
const LoaderFolder = () => {
  const SkeletonCircle = ({ extraCss = '' }: skeletonProps) => (
    <div
      className={`bg-zinc-300 w-6 h-6 rounded-full relative animate-pulse  ${
        extraCss ? extraCss : ''
      }`}
    ></div>
  );
  const FolderContentSkeleton = () => (
    <div
      className={` flex flex-col bg-zinc-300 w-3/4 h-3/4 realtive rounded animate-pulse gap-2 p-4  overflow-hidden`}
    >
      <div className="flex w-full  basis-2/4 justify-around items-center">
        <SkeletonCircle extraCss="bg-zinc-500 w-16 h-16 " />
        <div className="flex flex-col basis-2/4 gap-2">
          <BarSkeleton extraCss="bg-zinc-500 relative border h-[1rem] w-3/4 " />
          <BarSkeleton extraCss="bg-zinc-500 relative border h-[1rem] w-1/4" />
          <BarSkeleton extraCss="bg-zinc-500 relative border h-[1rem] w-2/4" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <BarSkeleton extraCss="bg-zinc-500 relative border w-full h-[1.5rem] " />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <BarSkeleton extraCss="bg-zinc-500 relative border w-4/4 h-[1rem]" />
        <BarSkeleton extraCss="bg-zinc-500 relative border w-1/4 h-[1rem]" />
        <div className="flex">
          <BarSkeleton extraCss="bg-zinc-500 relative border w-3/4 h-[1rem]" />
          <BarSkeleton extraCss="bg-zinc-500 relative border w-3/4 h-[1rem]" />
        </div>
        <BarSkeleton extraCss="bg-zinc-500 relative border w-4/4 h-[1rem]" />
      </div>
      <div className="flex gap-2 w-full">
        <BarSkeleton extraCss="bg-zinc-500 relative border w-2/3 h-[1rem]" />
        <BarSkeleton extraCss="bg-zinc-500 relative border w-1/3 h-[1rem]" />
        <BarSkeleton extraCss="bg-zinc-500 relative border w-2/3 h-[1rem]" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <BarSkeleton extraCss="bg-zinc-500 relative border w-2/3 h-[1rem]" />
        <BarSkeleton extraCss="bg-zinc-500 relative border w-1/3 h-[1rem]" />
        <BarSkeleton extraCss="bg-zinc-500 relative border w-2/3 h-[1rem]" />
      </div>
      <div className="flex gap-2 w-full">
        <BarSkeleton extraCss="bg-zinc-500 relative border w-2/3 h-[1rem]" />
        <BarSkeleton extraCss="bg-zinc-500 relative border w-1/3 h-[1rem]" />
        <BarSkeleton extraCss="bg-zinc-500 relative border w-2/3 h-[1rem]" />
      </div>
    </div>
  );

  const BarSkeleton = ({ extraCss = '' }: skeletonProps) => (
    <div
      className={`folder-top-bar-text bg-zinc-300 w-3/4 h-full relative rounded animate-pulse ${
        extraCss ? extraCss : ''
      }`}
    ></div>
  );

  const ListElementSkeleton = ({ extraCss = '' }: skeletonProps) => (
    <li
      className={`flex bg-zinc-300 w-2/3 h-full relative rounded animate-pulse  ${
        extraCss ? extraCss : ''
      }`}
    >
      {'_'}
    </li>
  );
  return (
    <div className="w-full h-full overflow-hidden ">
      <div className="text-neutral-100 bg-zinc-600 flex justify-between items-center folder-top-bar">
        <BarSkeleton extraCss="m-2 w-1/3 h-6" />
        <div className="flex justify-center self-stretch min-h-full folder-top-bar-buttons">
          <div className="folder-top-bar-buttons_button">
            <SkeletonCircle />
          </div>
          <div className="folder-top-bar-buttons_button">
            <SkeletonCircle />
          </div>
          <div className="folder-top-bar-buttons_button">
            <SkeletonCircle />
          </div>
        </div>
      </div>
      <div className="text-neutral-100 bg-zinc-500 flex w-full p-2">
        <div className="flex items-center justify-start border border-neutral-700 w-full p-1">
          <BarSkeleton />
        </div>
      </div>
      <div className="flex h-full w-full">
        <div className="text-neutral-100 bg-zinc-500 basis-1/4 ">
          <ul className="flex flex-col w-full gap-1 ml-4">
            <ul className="flex flex-col w-full gap-1">
              <ListElementSkeleton />

              <ul className="flex flex-col w-full gap-1 ml-4">
                <ListElementSkeleton />
                <ListElementSkeleton />
                <ListElementSkeleton />
              </ul>
            </ul>
            <ListElementSkeleton />
            <ListElementSkeleton />
          </ul>
        </div>
        <div className="text-neutral-100  basis-3/4 bg-zinc-400 p-4">
          <FolderContentSkeleton />
        </div>
      </div>
    </div>
  );
};

export default LoaderFolder;
