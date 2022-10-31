import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Video from 'src/components/Video';
import degustationFr from 'src/assets/videos/degustationFr.mp4';
import degustationEn from 'src/assets/videos/degustationEn.mp4';
import useStateComponent from 'src/hooks/useStateComponent';
import { a, useSpring } from '@react-spring/web';
import PropTypes from 'prop-types';
import bgVideo2 from 'src/assets/pictures/bgVideo2.jpg';
import { buttonWidth } from 'src/utils/functions';
import useIsMobile from 'src/hooks/useIsMobile';
import useHover from 'src/hooks/useHover';

const Page2 = ({ data, langage }) => {
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const { isMobile, isSmallDesktop } = useIsMobile();
  const [
    hover, setHover, out, setOut,
  ] = useHover();
  const [
    hoverNext, setHoverNext, outNext, setOutNext,
  ] = useHover();
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
    width: buttonWidth(hover, isMobile, isSmallDesktop, langage, 380, 260, 380, 260),
    config: hover || out ? {
      duration: 600, mass: 7, tension: 200, friction: 30,
    }
      : {},
  });
  const propsNext = useSpring({
    width: buttonWidth(hoverNext, isMobile, isSmallDesktop, langage, 380, 260, 380, 260),
    config: hoverNext || outNext ? {
      duration: 600, mass: 7, tension: 200, friction: 30,
    } : {},
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
              url={langage === 'EN' ? degustationEn : degustationFr}
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
                setHover(false); setOut(true);
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
                setOutNext(true);
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
