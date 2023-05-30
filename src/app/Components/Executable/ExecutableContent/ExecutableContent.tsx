'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import parse from 'html-react-parser';
import { mq } from '@/config/mediaQueries';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
  windowData?: any;
};
const ExecutableContent = ({ windowData }: Props) => {
  const [client, setClient] = useState(windowData);
  const { isPhone, isTablet } = useMediaQuery(mq);
  return (
    <div className="overflow-hidden executable-content  ">
      {/* CONTENT */}
      <div className="flex flex-col sm:flex-row min-h-full w-full max-h-full flex-1 bg-neutral-100 text-neutral-900 relative z-100 ">
        {/* TITLE & PHOTO SECTION */}
        <div className="flex flex-col min-h-full sm:basis-4/12 bg-neutral-800 justify-center gap-4 p-4 ">
          <div className="flex justify-center items-center relative aspect-square">
            {client?.featuredImage?.node?.mediaItemUrl ? (
              <Image
                className="object-contain h-full"
                src={client?.featuredImage?.node?.mediaItemUrl}
                alt={`${client?.title} image`}
                fill
              />
            ) : null}
            {/* TITLE */}
          </div>

          {!isPhone ? (
            <h2 className="text-xm tracking-normal text-white whitespace-normal">
              {`${client?.title}`}
            </h2>
          ) : null}
        </div>

        {/* PARSING CONTENT FROM WP STRING TO HTML */}
        <div className=" html-wp-content  sm:basis-8/12 overflow-y-scroll ">
          {isPhone ? (
            <h2 className="text-xm tracking-normal text-black whitespace-normal">
              {`${client?.title}`}
            </h2>
          ) : null}
          {parse(`${client?.content}`)}
        </div>
      </div>
    </div>
  );
};

export default ExecutableContent;
