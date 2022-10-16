import { useEffect, useState } from 'react';

const useResizeWindow = (homeRef, pageNumber, langage) => {
  const [top, setTopButton] = useState(null);
  const [right, setRightHomeButton] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const ButtonPosition = () => {
    if (pageNumber <= 1 && homeRef.current !== null) {
      setTopButton(
        homeRef.current.getBoundingClientRect().top
        + homeRef.current.getBoundingClientRect().height
        + (window.innerHeight * 0.025),
      );
      setRightHomeButton(homeRef.current.getBoundingClientRect().left);
    }
    else {
      setTopButton(window.innerHeight - (window.innerHeight * 0.15));
      if (langage === 'en') {
        setRightHomeButton(window.innerWidth - 415);
      }
      else {
        setRightHomeButton(
          window.innerWidth - 560,
        );
      }
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setIsMobile(true);
    }
    else {
      setIsMobile(false);
    }
    ButtonPosition();
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 600) {
        setIsMobile(true);
      }
      else {
        setIsMobile(false);
      }
      ButtonPosition();
    });
  }, [pageNumber, langage]);

  return { isMobile, top, right };
};
export default useResizeWindow;
