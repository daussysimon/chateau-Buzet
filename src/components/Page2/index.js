import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Video from 'src/components/Video';
import videoFr from 'src/assets/videos/videotest.mp4';
import useStateComponent from 'src/hooks/useStateComponent';
import { a, useSpring } from '@react-spring/web';
import PropTypes from 'prop-types';
import bgVideo2 from 'src/assets/pictures/bgVideo2.jpg';

const Page2 = ({ data, langage }) => {
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [hover, setHover] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const {
    state, setState, VISIBLE, VANISH, DELETE,
  } = useStateComponent();
  useEffect(() => {
    if (ended) {
      setState(VANISH);
    }
    else {
      setState(VISIBLE);
    }
  }, [ended]);
  const propsReplay = useSpring({
    width: hover ? 280 : 260,
    config: {
      duration: 600, mass: 7, tension: 200, friction: 30,
    },
  });

  const propsNext = useSpring({
    width: hoverNext ? 280 : 260,
    config: { duration: 600 },
  });

  return (
    <main
      className="main"
      style={{ background: `center / contain no-repeat url(${bgVideo2})` }}
    >
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
          >
            <a.div
              style={propsReplay}
              className={hover ? 'button__container button__container--replay button__container--hover' : 'button__container button__container--replay'}
              onMouseLeave={() => {
                setHover(false);
              }}
              onMouseEnter={() => setHover(true)}
              onClick={() => {
                setState(VISIBLE);
                setEnded(false);
                setHover(false);
              }}
            >
              <a className={langage === 'en' ? 'button button--replay button--replay--en' : 'button button--replay'} type="button">{data.buttonReplay}</a>
            </a.div>
            <a.div
              style={propsNext}
              className={hoverNext ? 'button__container button__container--next button__container--hover' : 'button__container button__container--next'}
              onMouseLeave={() => {
                setHoverNext(false);
              }}
              onMouseEnter={() => setHoverNext(true)}
            >
              <Link className={langage === 'en' ? 'button button--next button--next--en' : 'button button--next'} to="/context_degustation">{data.buttonOut}</Link>
            </a.div>
          </nav>
        )}
    </main>
  );
};
Page2.propTypes = {
  data: PropTypes.shape({
    buttonReplay: PropTypes.string.isRequired,
    buttonOut: PropTypes.string.isRequired,
  }).isRequired,
  langage: PropTypes.string.isRequired,
};

export default Page2;
