import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import prune from 'src/assets/pictures/prune.png';
import { useSpring, a } from '@react-spring/web';
import useHover from 'src/hooks/useHover';

import cadreException from 'src/assets/pictures/degustation/cadre-exception.jpg';
import celebration from 'src/assets/pictures/degustation/celebration.jpg';
import champetre from 'src/assets/pictures/degustation/champetre.jpg';
import rendezvousGourmand from 'src/assets/pictures/degustation/rendezvous-gourmand-nb.jpg';
import deguBackground from 'src/assets/pictures/deguBackground.png';
import { useEffect, useState } from 'react';

const Page4 = ({ association, data }) => {
  const navigate = useNavigate();
  const {
    hover, setHover, out, setOut,
  } = useHover();
  const [top, setTop] = useState(window.innerWidth - 350);
  const img = (type) => {
    if (type === 'celebration') {
      return celebration;
    }
    if (type === 'gourmand') {
      return rendezvousGourmand;
    }
    if (type === 'exception') {
      return cadreException;
    }
    return champetre;
  };
  useEffect(() => {
    if (association.length <= 0) {
      navigate('/saveurs');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setTop(window.innerWidth - 290);
    });
  }, []);

  const propsThx = useSpring({
    width: hover ? 260 : 240,
    left: top,
    config: {
      duration: hover || out ? 600 : 0, mass: 7, tension: 200, friction: 30,
    },
  });

  return (
    <main className="main page4">
      <aside
        className="association__aside"
        style={{ background: `center / contain no-repeat url(${deguBackground})` }}
      >
        <img alt="représentation d'une scene de dégustation" src={img(association)} />
      </aside>
      <section className="association__container">
        <h1>{data.title}</h1>
        <img alt="logo" src={prune} className="association__logo" />
        <h3 className="association__title"><strong>{data[association]?.title} :</strong> {data[association]?.subtitle}</h3>
        <p className="association__para">{data[association]?.text} </p>
      </section>
      <a.div
        style={propsThx}
        className={hover ? 'button__container button__container--testing button__container--hover' : 'button__container button__container--testing'}
        onMouseLeave={() => {
          setHover(false); setOut(true);
        }}
        onMouseEnter={() => setHover(true)}
      >
        <Link to="/" className="button button--thx">
          {data.button}
        </Link>
      </a.div>
    </main>
  );
};

Page4.propTypes = {
  association: PropTypes.string.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired,
};

export default Page4;
