import ExecutableContainer from '@/app/Components/Executable/ExecutableContainer/ExecutableContainer';
import ExecutableContent from '@/app/Components/Executable/ExecutableContent/ExecutableContent';
import { getOnePost } from '@/app/services/fetch-one-post.service';
import Image from 'next/image';
import React from 'react';

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getOnePost(`${params.slug}`);
  return (
    <div>
      <ExecutableContainer
        icon={
          <Image
            src={'/ico/w98/png/notepad-5.png'}
            fill
            className="w-full aspect-video "
            alt={`icon image`}
          />
        }
        onClose="back"
        folderName={params.slug}
      >
        <ExecutableContent windowData={data.data.post} />
      </ExecutableContainer>
    </div>
  );
};

export default page;
