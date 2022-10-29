import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 850) {
      setIsMobile(true);
    }
    else {
      setIsMobile(false);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 850) {
        setIsMobile(true);
      }
      else {
        setIsMobile(false);
      }
    });
  }, []);
  return {
    isMobile,
  };
};
export default useIsMobile;
