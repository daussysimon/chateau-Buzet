import { useEffect, useRef, useState } from 'react';
import { useSpring, a } from '@react-spring/web';
import { Link } from 'react-router-dom';
import useStateComponent from 'src/hooks/useStateComponent';
import { buttonWidth } from 'src/utils/functions';
import PropTypes from 'prop-types';
import bgNav from 'src/assets/pictures/bgNav.jpg';
import Video from 'src/components/Video';

const Winery = ({
  setHover, setOut, hover, isMobile, isSmallDesktop,
  duration, ended, setEnded, data, langage, menuIsOpen,
}) => {
  const [playing, setPlaying] = useState(false);
  const {
    state, setState, VISIBLE, VANISH, DELETE,
  } = useStateComponent();
  const buttonRef = useRef(null);

  useEffect(() => {
    if (ended) {
      setState(VANISH);
    }
    else {
      setState(VISIBLE);
    }
  }, [ended]);

  const buttonStyle = useSpring({
    width: buttonWidth(hover, isMobile, isSmallDesktop, langage, 235, 200, 235, 200),
    config: {
      duration: duration(), mass: 7, tension: 200, friction: 30,
    },
  });
  return (
    <div>
      { state !== DELETE
       && (
       <div className={state === VANISH ? 'video video--vanish' : 'video'} style={{ backgroundColor: 'white' }}>
         <Video
           url={langage === 'en' ? './videos/histoireEn.mp4' : './videos/histoireFr.mp4'}
           setPlaying={setPlaying}
           playing={playing}
           setEnded={setEnded}
           ended={ended}
           langage={langage}
           menuIsOpen={menuIsOpen}
         />
         {isMobile
        && (
        <button
          className="button__container button__container--wineryMobile"
          type="button"
        >
          <Link to="/degustation" className="button button--wineryMobile">
            {data.buttonWinery}
          </Link>
        </button>
        )}
       </div>
       )}
      { state !== VISIBLE
      && (
      <nav
        className={state === VANISH ? 'page__nav--appear page__nav' : 'page__nav'}
        style={!isMobile
          ? { background: `center / contain no-repeat url(${bgNav})`, height: 'calc(100vh - 164px)' }
          : { background: `65% / 200% no-repeat url(${bgNav})` }}
      >
        <a.div
          style={buttonStyle}
          className={hover ? 'button__container button__container--winery button__container--hover' : 'button__container button__container--winery '}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => {
            setHover(false); setOut(true);
          }}
          ref={buttonRef}
        >
          <Link to="/degustation" className={langage === 'en' ? 'button button--winery button--winery--en' : 'button button--winery'}> {data.buttonTesting} </Link>
        </a.div>
      </nav>
      )}
    </div>
  );
};

Winery.propTypes = {
  setHover: PropTypes.func.isRequired,
  setOut: PropTypes.func.isRequired,
  hover: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
  duration: PropTypes.func.isRequired,
  ended: PropTypes.bool.isRequired,
  setEnded: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  langage: PropTypes.string.isRequired,
  isSmallDesktop: PropTypes.bool.isRequired,
};

export default Winery;
