import { useState, useEffect } from 'react';
import loaderGiff from 'src/assets/pictures/loader.gif';

const Loader = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoader(false), 1000);
  }, []);
  return (
    loader && (
    <div className="loader">
      <img src={loaderGiff} alt="loader" />
    </div>
    )
  );
};

export default Loader;
