import PropTypes from 'prop-types';
import { useSpring, a } from '@react-spring/web';
import useHover from 'src/hooks/useHover';
import backgroundPage5 from 'src/assets/pictures/bg-page5.png';
import logoPage5 from 'src/assets/pictures/logo-page5.png';
import wineLeft from 'src/assets/pictures/wine-left.png';
import wineRight from 'src/assets/pictures/wine-right.png';
import boutonFacebook from 'src/assets/pictures/bouton-facebook.svg';
import boutonInstagram from 'src/assets/pictures/bouton-instagram.svg';
import boutonYoutube from 'src/assets/pictures/bouton-youtube.svg';

const Page5 = ({ data }) => {
  const {
    hover, setHover, out, setOut,
  } = useHover();

  const propsThx = useSpring({
    width: hover ? 400 : 380,
    config: {
      duration: hover || out ? 600 : 0, mass: 7, tension: 200, friction: 30,
    },
  });

  return (
    <main
      className="main page5"
      style={{ background: `center / contain no-repeat url(${backgroundPage5})` }}
    >
      <div className="page5__container">
        <img src={logoPage5} alt="logo" />
        <h4 className="container__subtitle"><span>-</span>{data.subtitle}<span>-</span></h4>
        <h1 className="container__title">{data.title}</h1>
      </div>
      <a.div
        style={propsThx}
        className={hover ? 'button__container button__container--visite button__container--hover' : 'button__container button__container--visite'}
        onMouseLeave={() => {
          setHover(false); setOut(true);
        }}
        onMouseEnter={() => setHover(true)}
      >
        <a href="https://www.nouslesvigneronsdebuzet.fr" className="button button--visite">
          {data.button}
        </a>
      </a.div>
      <nav className="page5__nav">
        <a href="https://www.facebook.com/vigneronsbuzet/" className="nav__link">
          <img src={boutonFacebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/vigneronsbuzet" className="nav__link">
          <img src={boutonInstagram} alt="instagram" />
        </a>
        <a href="https://www.youtube.com/vigneronsdebuzet" className="nav__link">
          <img src={boutonYoutube} alt="youtube" />
        </a>
      </nav>
      <div className="page5__img">
        <img src={wineLeft} alt="verre de vin" className="img__left" />
        <img src={wineRight} alt="verre de vin" className="img__right" />
      </div>

    </main>
  );
};

Page5.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired,
};

export default Page5;
