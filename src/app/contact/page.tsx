import ExecutableContainer from '@/app/Components/Executable/ExecutableContainer/ExecutableContainer';
import ContactForm from '@/app/Components/formularies/ContactForm';
import React from 'react';

const page = () => {
  return (
    <main className="folder-area flex min-h-screen z-20 p-4 overflow-hidden pointer-events-none">
      <ExecutableContainer overflow onClose="close" folderName="Contacto">
        <ContactForm />
      </ExecutableContainer>
    </main>
  );
};

export default page;
