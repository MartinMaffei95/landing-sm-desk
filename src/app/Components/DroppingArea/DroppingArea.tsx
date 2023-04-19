'use client';
import { useDraggableContext } from '@/app/context/store';
import { sharingInformationService } from '@/app/services/sharing-information.service';
import React, { useEffect } from 'react';

const DroppingArea = ({ children }: { children: React.ReactNode }) => {
  const { container_reference } = useDraggableContext();
  const subscription$ = sharingInformationService.getSubject();
  return (
    <div ref={container_reference} className="h-screen w-screen bg-red-600 ">
      {children}

      <button
        onClick={() => {
          console.log(container_reference);
        }}
      >
        TEST
      </button>
    </div>
  );
};

export default DroppingArea;
