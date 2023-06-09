import { useEffect, useState } from 'react';

const useHasWindow = (): { hasWindow: boolean } => {
  const [hasWindow, setHasWindow] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
      console.log(window.innerWidth);
    }
  }, []);
  return { hasWindow };
};
export default useHasWindow;
