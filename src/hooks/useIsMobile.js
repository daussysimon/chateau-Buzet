import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isSmallDesktop, setIsSmallDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mobileVertical = () => {
    if (window.innerWidth <= 1024) {
      setIsSmallDesktop(true);
    }
    else {
      setIsSmallDesktop(false);
    }
    if (
      (window.innerWidth < window.innerHeight && window.innerWidth <= 820)
      || window.innerWidth <= 700 || window.innerHeight <= 450) {
      setIsMobile(true);
    }
    else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    mobileVertical();
    window.addEventListener('resize', () => {
      mobileVertical();
    });
  }, []);
  return {
    isMobile, isSmallDesktop,
  };
};
export default useIsMobile;
