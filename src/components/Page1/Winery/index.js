import { useEffect, useRef, useState } from 'react';
import { useSpring, a } from '@react-spring/web';
import { Link } from 'react-router-dom';
import videoFr from 'src/assets/videos/videotest.mp4';
import useStateComponent from 'src/hooks/useStateComponent';
import { buttonWidth, className } from 'src/utils/functions';
import PropTypes from 'prop-types';
import bgNav from 'src/assets/pictures/bgNav.jpg';
import Video from 'src/components/Video';

const Winery = ({
  setHover, setOut, hover, isMobile, duration, ended, setEnded, data, langage,
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
    width: buttonWidth(hover, isMobile, langage, 244, 250, 230, 230),
    config: {
      duration: duration(), mass: 7, tension: 200, friction: 30,
    },
  });

  return (
    <>
      { state !== DELETE
       && (
       <div className={state === VANISH ? 'video--vanish' : ''}>
         <Video
           url={videoFr}
           setPlaying={setPlaying}
           playing={playing}
           setEnded={setEnded}
           ended={ended}
         />
       </div>
       )}
      { state !== VISIBLE
      && (
      <nav
        className={state === VANISH ? 'page__nav--appear pave__nav' : 'page__nav'}
        style={{ background: `center / contain no-repeat url(${bgNav})` }}
      >
        <a.div
          style={buttonStyle}
          className={className('winery', hover, langage)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => {
            setHover(false); setOut(true);
          }}
          ref={buttonRef}
        >
          <Link to="/degustation" className="button button--winery"> {data} </Link>
        </a.div>
      </nav>
      )}
    </>
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
};

export default Winery;
