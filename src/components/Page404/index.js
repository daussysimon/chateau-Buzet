import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useHover from 'src/hooks/useHover';
import { useSpring, a } from '@react-spring/web';
import img404 from 'src/assets/pictures/img404.png';

const Page404 = () => {
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
  }, []);

  const props404 = useSpring({
    width: hover ? 455 : 435,
    top: top,
    left: left,
    config: {
      duration: hover || out ? 600 : 0, mass: 7, tension: 200, friction: 30,
    },
  });
  return (
    <main className="page404">
      <div className="page404__container">
        <div className="container__img">
          <img src={img404} alt="représentation de la bouteille de vin" />
        </div>
        <div className="container__text">
          <h3 className="text__title"><span>Oups!</span> La page que vous recherchez semble introuvable</h3>
          <p className="text__para" ref={ref}>Il se peut que l'URL saisie soit mal orthographié ou que la page que vous recherchez n'existe plus</p>
        </div>
      </div>
      <a.button
        style={{ ...props404 }}
        className={hover ? 'button__container button__container--hover' : 'button__container'}
        type="button"
        onMouseLeave={() => {
          setHover(false); setOut(true);
        }}
        onMouseEnter={() => setHover(true)}
      >
        <Link to="/" className="button button--404">Retouner á la page d'accueil</Link>
      </a.button>
    </main>
  );
};

export default Page404;
