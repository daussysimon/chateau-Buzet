import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isSmallDesktop, setIsSmallDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  console.log(document.body.clientHeight < 700);
  console.log(document.body.clientWidth <= 900);
  console.log(document.body.clientWidth);
  console.log(document.body.clientHeight);
  console.log(document.body.clientWidth < document.body.clientHeight);
    console.log( document.body.clientWidth <= 900
      && document.body.clientWidth < document.body.clientHeight
      && document.body.clientHeight < 700);
  const mobileVertical = () => {
    if (document.body.clientWidth <= 1024) {
      setIsSmallDesktop(true);
    }
    else {
      setIsSmallDesktop(false);
    }
    if (
      (document.body.clientWidth <= 700)
      || (
        document.body.clientWidth <= 900
        && document.body.clientHeight < 700)) {
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
