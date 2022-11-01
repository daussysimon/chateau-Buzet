import { useEffect, useRef, useState } from 'react';
import { useSpring, a } from '@react-spring/web';
import { Link } from 'react-router-dom';
import histoireFr from 'src/assets/videos/histoireEn.mp4';
import histoireEn from 'src/assets/videos/histoireFr.mp4';
import useStateComponent from 'src/hooks/useStateComponent';
import { buttonWidth } from 'src/utils/functions';
import PropTypes from 'prop-types';
import bgNav from 'src/assets/pictures/bgNav.jpg';
import Video from 'src/components/Video';

const Winery = ({
  setHover, setOut, hover, isMobile, isSmallDesktop, duration, ended, setEnded, data, langage,
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
    <div style={!isMobile
      ? { background: `center / contain no-repeat url(${bgNav})` }
      : { background: `65% / cover no-repeat url(${bgNav})` }}
    >
      { state !== DELETE
       && (
       <div className={state === VANISH ? 'video--vanish' : ''}>
         <Video
           url={langage === 'EN' ? histoireEn : histoireFr}
           setPlaying={setPlaying}
           playing={playing}
           setEnded={setEnded}
           ended={ended}
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
        className={state === VANISH ? 'page__nav--appear pave__nav' : 'page__nav'}
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
  duration: PropTypes.func.isRequired,
  ended: PropTypes.bool.isRequired,
  setEnded: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
  langage: PropTypes.string.isRequired,
  isSmallDesktop: PropTypes.bool.isRequired,
};

export default Winery;
