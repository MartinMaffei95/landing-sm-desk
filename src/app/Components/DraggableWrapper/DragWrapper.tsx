'use client';
import DroppingArea from '@/app/Components/DroppingArea/DroppingArea';

import React, { useContext, useEffect, useRef } from 'react';

const DragWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <DragContextProvider>
      <DroppingArea>{children}</DroppingArea>
    </DragContextProvider>
  );
};

export default DragWrapper;
