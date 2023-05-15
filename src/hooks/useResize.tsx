import useHasWindow from '@/hooks/useHasWindow';
import { useState, useEffect } from 'react';

const useResize = () => {
  const [width, setWidth] = useState<number>(0);
  // Screen size
  const [screen, setScreen] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  // OpenwindowDIV size
  const [size, setSize] = useState({
    width: screen?.width * 0.7,
    height: screen?.height * 0.8,
  });

  const { hasWindow } = useHasWindow();

  const handleResize = () => {
    setWidth(window.innerWidth);
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    setSize({
      width: screen?.width * 0.7,
      height: screen?.height * 0.8,
    });
  };

  useEffect(() => {
    if (hasWindow) {
      setWidth(window.innerWidth);
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setSize({
        width: window.innerWidth * 0.7,
        height: window.innerHeight * 0.8,
      });
    }
  }, [hasWindow]);

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', handleResize);
    }
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return {
    size,
    setSize,
  };
};

export default useResize;
