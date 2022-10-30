import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 850) {
      setIsMobile(true);
    }
    else {
      setIsMobile(false);
    }
    if (window.innerWidth <= 1024) {
      if (window.innerWidth < window.innerHeight) {
        setIsVertical(true);
      }
      else {
        setIsVertical(false);
      }
    }
    else {
      setIsVertical(false);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 850) {
        setIsMobile(true);
      }
      else {
        setIsMobile(false);
      }
      if (window.innerWidth <= 1024) {
        if (window.innerWidth < window.innerHeight) {
          setIsVertical(true);
        }
        else {
          setIsVertical(false);
        }
      }
    });
  }, []);
  return {
    isMobile, isVertical,
  };
};
export default useIsMobile;
