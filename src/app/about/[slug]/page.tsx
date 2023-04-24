import Window from '@/app/Components/Executable/Window/Window';
import { getOnePost } from '@/app/services/fetch-one-post.service';
import React from 'react';

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getOnePost(`${params.slug}`);
  console.log(params);
  return (
    <div>
      <Window windowData={data.data.post} />
    </div>
  );
};

export default page;
