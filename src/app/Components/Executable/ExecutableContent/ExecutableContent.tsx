'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import parse from 'html-react-parser';

type Props = {
  windowData?: any;
};
const ExecutableContent = ({ windowData }: Props) => {
  const [client, setClient] = useState(windowData);

  return (
    <div className="overflow-hidden executable-content  ">
      {/* CONTENT */}
      <div className="flex flex-col sm:flex-row min-h-full w-full max-h-full flex-1 bg-neutral-100 text-neutral-900 relative z-100 ">
        {/* TITLE & PHOTO SECTION */}
        <div className="flex flex-col min-h-full basis-4/12 bg-neutral-800 justify-center gap-4 p-4 ">
          <div className="flex justify-center items-center relative object-fit ">
            {client?.featuredImage?.node?.mediaItemUrl ? (
              <Image
                src={client?.featuredImage?.node?.mediaItemUrl}
                alt={`${client?.title} image`}
                width={250}
                height={250}
              />
            ) : null}
            {/* TITLE */}
          </div>

          <h1 className="text-sm tracking-normal text-white whitespace-normal">
            {`${client?.title}`}
          </h1>
        </div>

        {/* PARSING CONTENT FROM WP STRING TO HTML */}
        <div className=" html-wp-content  basis-8/12 overflow-y-scroll ">
          {parse(`${client?.content}`)}
        </div>
      </div>
    </div>
  );
};

export default ExecutableContent;
