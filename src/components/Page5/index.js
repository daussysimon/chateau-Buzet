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
import useIsMobile from 'src/hooks/useIsMobile';

const Page5 = ({ data }) => {
  const [hover, setHover, out, setOut] = useHover();
  const { isMobile } = useIsMobile();

  const propsThx = useSpring({
    width: hover ? 400 : 380,
    config: {
      duration: hover || out ? 600 : 0, mass: 7, tension: 200, friction: 30,
    },
  });

  return (
    <main
      className="main page5"
      style={!isMobile
        ? { background: `center / contain no-repeat url(${backgroundPage5})` }
        : { background: `center / 90% 100% no-repeat url(${backgroundPage5})` }}
    >
      { !isMobile
        ? (
          <>
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
              <a
                onClick={() => window.open('https://www.nouslesvigneronsdebuzet.fr', '_blank')}
                className="button button--visite"
                target="_blanck"
              >
                {data.button}
              </a>
            </a.div>
            <nav className="page5__nav">
              <a href="https://www.facebook.com/215916685086874/" className="nav__link" target="_blanck">
                <img src={boutonFacebook} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/vigneronsbuzet" className="nav__link" target="_blanck">
                <img src={boutonInstagram} alt="instagram" />
              </a>
              <a href="https://www.youtube.com/vigneronsdebuzet" className="nav__link" target="_blanck">
                <img src={boutonYoutube} alt="youtube" />
              </a>
            </nav>
            <div className="page5__img">
              <img src={wineLeft} alt="verre de vin" className="img__left" />
              <img src={wineRight} alt="verre de vin" className="img__right" />
            </div>
          </>
        )
        : (
          <div className="page5__container">
            <img src={logoPage5} alt="logo" />
            <h4 className="container__subtitle"><span>-</span>{data.subtitle}<span>-</span></h4>
            <h1 className="container__title">{data.title}</h1>
            <div className="page5__content">
              <div className="page5__img">
                <img src={wineLeft} alt="verre de vin" className="img__left" />
              </div>
              <a.div
                style={propsThx}
                className="button__container button__container--visite"
              >
                <a href="https://www.nouslesvigneronsdebuzet.fr" className="button button--visite" target="_blanck">
                  {data.button}
                </a>
              </a.div>
              <nav className="page5__nav">
                <a href="fb://page/215916685086874" className="nav__link">
                  <img src={boutonFacebook} alt="facebook" />
                </a>
                <a href="instagram://user?username=vigneronsbuzet" className="nav__link">
                  <img src={boutonInstagram} alt="instagram" />
                </a>
                <a href="youtube://vigneronsdebuzet" className="nav__link">
                  <img src={boutonYoutube} alt="youtube" />
                </a>
              </nav>
            </div>
          </div>
        )}
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
