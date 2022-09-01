import { useEffect, useState } from 'react';

const useStateComponent = () => {
  const [state, setState] = useState(1);
  const VISIBLE = 1;
  const VANISH = 2;
  const DELETE = 3;
  let stateTimeout = null;
  useEffect(() => {
    if (state === VANISH) {
      stateTimeout = setTimeout(() => {
        setState(DELETE);
      }, 900);
    }
    return (() => clearTimeout(stateTimeout));
  }, [state]);
  return {
    state, setState, VISIBLE, VANISH, DELETE,
  };
};

export default useStateComponent;
