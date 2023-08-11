'use client';
import ExecutableContainer from '@/app/Components/Executable/ExecutableContainer/ExecutableContainer';
import ContactForm from '@/app/Components/formularies/ContactForm';
import { SnackbarProvider } from 'notistack';
import React from 'react';

const page = () => {
  return (
    <SnackbarProvider>
      <main className="folder-area flex min-h-screen z-20 p-4 overflow-hidden pointer-events-none">
        <ExecutableContainer overflow onClose="close" folderName="Contacto">
          <ContactForm />
        </ExecutableContainer>
      </main>
    </SnackbarProvider>
  );
};

export default page;
