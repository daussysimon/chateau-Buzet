/* eslint-disable object-curly-newline */
import Home from 'src/components/Page1/Home';
import Winery from 'src/components/Page1/Winery';
import PropTypes from 'prop-types';
import { buttonWidth } from 'src/utils/functions';
import { useEffect, useRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSpring, a } from '@react-spring/web';
import useResizeWindow from 'src/hooks/useResizeWindow';
import useStateComponent from 'src/hooks/useStateComponent';
import useHover from 'src/hooks/useHover';
import useIsMobile from 'src/hooks/useIsMobile';

const Page1 = ({ setPageNumber, pageNumber, data, langage }) => {
  const homeRef = useRef(null);
  const [slice, setSlice] = useState(false);
  const [ended, setEnded] = useState(false);
  const location = useLocation();
  const { top, right } = useResizeWindow(homeRef, pageNumber, langage);
  const { isMobile, isSmallDesktop } = useIsMobile();
  const { state, setState, VISIBLE, VANISH, DELETE } = useStateComponent();
  const [hover, setHover, out, setOut] = useHover();

  useEffect(() => {
    if (location.pathname === '/histoire') {
      setPageNumber(2);
      setState(VANISH);
    }
    else {
      setPageNumber(1);
      setState(VISIBLE);
      setEnded(false);
    }
    return () => {
      setState(VISIBLE);
      setEnded(false);
    };
  }, [location]);

  let sliceTimout = null;

  useEffect(() => {
    if (slice) {
      sliceTimout = setTimeout(() => {
        setSlice(false);
      }, 800);
    }
    return () => clearTimeout(sliceTimout);
  }, [slice]);

  const duration = () => {
    if (pageNumber === 2 && slice) {
      return 800;
    }
    if (out || hover) {
      return 400;
    }
    return 0;
  };

  const propsHome = useSpring({
    position: 'absolute',
    top: top,
    left: right,
    height: state !== VISIBLE ? 62 : 72,
    right: 'auto',
    width:
      pageNumber === 1
        ? buttonWidth(
          hover,
          isMobile,
          isSmallDesktop,
          langage,
          340,
          210,
          310,
          195,
        )
        : buttonWidth(
          hover,
          isMobile,
          isSmallDesktop,
          langage,
          300,
          300,
          240,
          240,
        ),
    config: { duration: duration(), mass: 7, tension: 200, friction: 30 },
  });

  const propsHomePage = useSpring({
    opacity: pageNumber <= 1 ? 1 : 0,
    config: !slice ? { duration: 0 } : { duration: 800 },
  });
  const propsWineryPage = useSpring({
    opacity: pageNumber <= 1 ? 0 : 1,
    config: !slice ? { duration: 0 } : { duration: 800 },
  });
  return (
    <>
      <main className="page1 main">
        {state !== DELETE && (
          <a.section style={propsHomePage} className="home">
            <Home ref={homeRef} data={data} isMobile={isMobile} />
          </a.section>
        )}
        {state !== VISIBLE && (
          <a.section style={propsWineryPage} className="winery">
            <Winery
              style={propsWineryPage}
              setHover={setHover}
              setOut={setOut}
              hover={hover}
              isMobile={isMobile}
              duration={duration}
              ended={ended}
              setEnded={setEnded}
              data={data}
              langage={langage}
              isSmallDesktop={isSmallDesktop}
            />
          </a.section>
        )}
      </main>
      {!ended && !isMobile && (
        <a.button
          style={{
            ...propsHome,
          }}
          className={
            hover
              ? 'button__container button__container--hover'
              : 'button__container'
          }
          type="button"
          onMouseLeave={() => {
            setHover(false);
            setOut(true);
          }}
          onMouseEnter={() => setHover(true)}
          onClick={() => {
            setSlice(true);
          }}
        >
          {state !== DELETE && (
            <Link to="/histoire" className="button">
              <span className={state === VANISH ? 'button--opacity2' : ''}>
                {data.buttonHome}
              </span>
            </Link>
          )}
          {state !== VISIBLE && (
            <Link
              to="/degustation"
              className={
                state === VANISH
                  ? 'button--opacity button button--buzet'
                  : 'button button--buzet'
              }
            >
              {data.buttonWinery}
            </Link>
          )}
        </a.button>
      )}
    </>
  );
};

Page1.propTypes = {
  setPageNumber: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  data: PropTypes.object,
  langage: PropTypes.string,
};

Page1.defaultProps = {
  data: {},
  langage: '',
};

export default Page1;
