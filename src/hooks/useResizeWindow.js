import { useEffect, useState } from 'react';

const useResizeWindow = (homeRef, pageNumber, langage) => {
  const [top, setTopButton] = useState(null);
  const [right, setRightHomeButton] = useState(null);

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
        setRightHomeButton(window.innerWidth - 500);
      }
      else {
        setRightHomeButton(
          window.innerWidth - 620,
        );
      }
    }
  };

  useEffect(() => {
    ButtonPosition();
    window.addEventListener('resize', () => {
      ButtonPosition();
    });
    return window.removeEventListener('resize', () => {
      ButtonPosition();
    });
  }, [pageNumber, langage]);

  return { top, right };
};
export default useResizeWindow;
