import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useHover from 'src/hooks/useHover';
import { useSpring, a } from '@react-spring/web';
import img404 from 'src/assets/pictures/img404.png';

const Page404 = ({ data, langage }) => {
  const ref = useRef(null);
  const [top, setTop] = useState();
  const [left, setLeft] = useState();
  const {
    hover, setHover, out, setOut,
  } = useHover();

  useEffect(() => {
    setTop(ref.current.getBoundingClientRect().top - 30);
    setLeft(ref.current.getBoundingClientRect().left);

    window.addEventListener('resize', () => {
      setTop(ref.current.getBoundingClientRect().top - 30);
      setLeft(ref.current.getBoundingClientRect().left);
    });
  }, [langage]);

  const props404 = useSpring({
    width: hover ? 405 : 385,
    top: top,
    left: left,
    config: {
      duration: hover || out ? 600 : 0, mass: 7, tension: 200, friction: 30,
    },
  });
  return (
    <main className="main page404">
      <div className="page404__container">
        <div className="container__img">
          <img src={img404} alt="représentation de la bouteille de vin" />
        </div>
        <div className="container__text">
          <h3 className="text__title"><span>{data.slogan}</span> {data.title}</h3>
          <p className="text__para" ref={ref}>{data.para}</p>
        </div>
        <a.button
          style={{ ...props404 }}
          className={hover ? 'button__container button__container--404 button__container--hover' : 'button__container button__container--404'}
          type="button"
          onMouseLeave={() => {
            setHover(false); setOut(true);
          }}
          onMouseEnter={() => setHover(true)}
        >
          <Link to="/" className={langage === 'en' ? 'button button--404 button--404--en' : 'button button--404'}>{data.button}</Link>
        </a.button>
      </div>
    </main>
  );
};
Page404.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    para: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired,
  langage: PropTypes.string.isRequired,
};

export default Page404;
