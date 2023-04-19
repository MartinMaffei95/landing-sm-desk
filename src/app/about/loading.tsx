import LoaderFolder from '@/app/Components/Folder/LoaderFolder';
import React from 'react';

const loading = () => {
  return (
    <main className="folder-area flex min-h-screen relative z-20 p-4">
      <LoaderFolder />
    </main>
  );
};

export default loading;
