import bottlePage1 from 'src/assets/pictures/bottle_page1.png';
import secondLogo from 'src/assets/pictures/second_logo.png';
import { forwardRef } from 'react';

const Home = forwardRef((props, ref) => (
  <>
    <header className="home__header">
      <h1 className="home__header__title">Château Buzet</h1>
      <p className="home__header__slogan">| <span> La renaissance d'un patrimoine millénaire</span> |</p>
    </header>
    <div className="home__container">
      <div className="container__img">
        <img src={bottlePage1} alt="représentation de la bouteille de vin" />
      </div>
      <div className="container__present">
        <img className="presentation__img" src={secondLogo} alt="preprésente une grappe de raisins" />
        <h3 className="presentation__title">Et si vous laissiez vos snes s'épanouir ?</h3>
        <p className="presentation__para" ref={ref}>
          ing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
        </p>
      </div>
    </div>
  </>
));

export default Home;
