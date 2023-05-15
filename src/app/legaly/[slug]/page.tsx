import ExecutableContainer from '@/app/Components/Executable/ExecutableContainer/ExecutableContainer';
import ExecutableContent from '@/app/Components/Executable/ExecutableContent/ExecutableContent';
import Window from '@/app/Components/Executable/Window/Window';
import { getOnePost } from '@/app/services/fetch-one-post.service';
import React from 'react';

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getOnePost(`${params.slug}`);
  return (
    <div>
      <ExecutableContainer onClose="back" folderName={params.slug}>
        <ExecutableContent windowData={data.data.post} />
      </ExecutableContainer>
    </div>
  );
};

export default page;
