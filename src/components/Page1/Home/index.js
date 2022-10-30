import bottlePage1 from 'src/assets/pictures/bottle_page1.png';
import secondLogo from 'src/assets/pictures/second_logo.png';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Home = forwardRef((props, ref) => (
  <>
    <header className="home__header">
      <h1 className="home__header__title">Château de Buzet</h1>
      <p className="home__header__slogan">- <span> {props.data.slogan}</span> -</p>
    </header>
    <div className="home__container">
      <div className="container__img">
        <img src={bottlePage1} alt="représentation de la bouteille de vin" />
      </div>
      <div className="container__present">
        <img className="presentation__img" src={secondLogo} alt="preprésente une grappe de raisins" />
        <h3 className="presentation__title">{props.data.subtitle}?</h3>
        <div className="presentation__para" ref={ref} dangerouslySetInnerHTML={{ __html: props.data.text }} />
      </div>
    </div>
  </>
));

Home.propTypes = {
  data: PropTypes.shape({
    slogan: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttonHome: PropTypes.string.isRequired,
  }).isRequired,
};
export default Home;
