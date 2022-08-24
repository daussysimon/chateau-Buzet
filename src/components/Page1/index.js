import Home from 'src/components/Home';
import Winery from 'src/components/Winery';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSpring, a } from 'react-spring';

const Page1 = ({ setPageNumber, pageNumber }) => {
  const homeRef = useRef(null);
  const homeButtonRef = useRef(null);
  const [topButton, setTopButton] = useState(null);
  const [rightHomeButton, setRightHomeButton] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const [changePage, setChangePage] = useState(false);
  const [slice, setSlice] = useState(false);
  const [hover, setHover] = useState(false);
  const [out, setOut] = useState(false);
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setIsMobile(true);
    }
    else {
      setIsMobile(false);
    }
    setTopButton(
      homeRef.current.getBoundingClientRect().top
      + homeRef.current.getBoundingClientRect().height
      + 20,
    );
    setRightHomeButton(homeRef.current.getBoundingClientRect().left);
    window.addEventListener('resize', () => {
      setTopButton(
        homeRef.current.getBoundingClientRect().top
        + homeRef.current.getBoundingClientRect().height
        + 20,
      );
      setRightHomeButton(homeRef.current.getBoundingClientRect().left);
      if (window.innerWidth <= 600) {
        setIsMobile(true);
      }
      else {
        setIsMobile(false);
      }
    });
  }, [pageNumber, isMobile]);

  useEffect(() => {
    if (changePage) {
      setTimeout(() => setChangePage(false), 300);
    }
  }, [changePage]);

  useEffect(() => {
    if (location.pathname === '/buzet') {
      setPageNumber(2);
      setTimeout(() => setOpacity(true), 400);
    }
    else {
      setPageNumber(1);
      setOpacity(false);
    }
  }, [location]);

  const right = () => {
    if (pageNumber <= 1) {
      return rightHomeButton;
    }
    return window.innerWidth - 550;
  };

  const top = () => {
    if (pageNumber <= 1) {
      return topButton;
    }
    return window.innerHeight - 150;
  };

  const width = () => {
    let widthButton = 498;
    if (pageNumber === 1) {
      widthButton = 334;
    }
    if (isMobile) {
      if (pageNumber === 1) {
        widthButton = 230;
      }
      else {
        widthButton = 330;
      }
    }
    else if (hover) {
      return widthButton + 20;
    }
    return widthButton;
  };

  const duration = () => {
    if ((pageNumber === 2 && slice) || out || hover) {
      return 300;
    }
    return 0;
  };

  const classNameWinery = () => {
    let className = 'button button--winery';
    if (pageNumber === 2) {
      className = 'button button--opacity';
    }
    if (opacity) {
      className = 'button';
    }
    return className;
  };

  const propsHome = useSpring({
    position: 'absolute',
    top: top(),
    left: right(),
    width: width(),
    config: { duration: duration() },
  });

  const propsHomePage = useSpring({
    opacity: pageNumber <= 1 ? 1 : 0,
    config: !changePage ? { duration: 0 } : { duration: 600 },
  });
  const propsWineryPage = useSpring({
    opacity: pageNumber <= 1 ? 0 : 1,
    config: !changePage ? { duration: 0 } : { duration: 600 },
  });

  return (
    <>
      <main className="page1" ref={containerRef}>
        <a.section
          style={propsHomePage}
          className="home"
        >
          <Home
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            ref={homeRef}
          />
        </a.section>
        <a.section style={propsWineryPage} className="winery">
          <Winery style={propsWineryPage} />
        </a.section>
      </main>
      <a.button
        style={{
          ...propsHome,
        }}
        className={hover ? 'button__container button__container--hover' : 'button__container'}
        ref={homeButtonRef}
        type="button"
        onMouseLeave={() => {
          setHover(false); setOut(true);
          setTimeout(() => {
            setOut(false);
          }, 300);
        }}
        onMouseEnter={() => setHover(true)}
        onClick={() => {
          setChangePage(true); setHover(false);
          setSlice(true);
          setTimeout(() => {
            setSlice(false);
          }, 300);
        }}
        onTouchStart={() => setHover(false)}
      >
        <Link
          to="/buzet"
          className={opacity ? ' button button--winery' : 'button'}
        >
          <span className={pageNumber === 2 ? 'button--opacity2' : ''}>Démarrer l'expérience</span>
        </Link>
        <Link to="/buzt" className={classNameWinery()}>Passer directement á la dégustation</Link>
      </a.button>
    </>
  );
};

Page1.propTypes = {
  setPageNumber: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
};
export default Page1;
