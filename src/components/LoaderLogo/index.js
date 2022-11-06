/* eslint-disable react/prop-types */
import loaderGiff from 'src/assets/pictures/loader.gif';

const Loader = ({ loaded }) => (
  <div className="loader">
    <div className="loader__container">
      <img src={loaderGiff} alt="loader" />
      <p>{loaded}%</p>
    </div>
  </div>
);

export default Loader;
