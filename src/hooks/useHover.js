import { useEffect, useState } from 'react';

const useHover = () => {
  const [hover, setHover] = useState(false);
  const [out, setOut] = useState(false);
  useEffect(() => {
    let time = null;
    if (out) {
      time = setTimeout(() => {
        setOut(false);
      }, 800);
    }
    return () => clearTimeout(time);
  }, [out]);
  return [
    hover, setHover, out, setOut,
  ];
};
export default useHover;
