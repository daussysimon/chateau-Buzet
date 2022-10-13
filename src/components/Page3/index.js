import glaces from 'src/assets/pictures/glaces.jpeg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import rondPhoto from 'src/assets/pictures/rond-photo.png';
import bouche from 'src/assets/pictures/bouche.png';
import bg3 from 'src/assets/pictures/bg3.jpg';

const Page3 = ({ setAssociation, data }) => (
  <main
    className="main page3"
    style={{ background: `center / contain no-repeat url(${bg3})` }}
  >
    <header className="page3__header">
      <img className="header__img" src={bouche} alt="une bouche faisant référence á la degustation du vin" />
      <h2 className="header__title">{data.title}</h2>
    </header>
    <section className="page3__section">
      <div className="section__testing">
        <Link
          className="testing__imgContainer"
          to="/association"
          onClick={() => {
            setAssociation('celebration');
          }}
          style={{ background: `center / contain no-repeat url(${rondPhoto})` }}
        >
          <img className="testing__img" src={glaces} alt="représentation de la degustation" />
        </Link>
        <h3 className="testing__title">{data.option1}</h3>
      </div>
      <div className="section__testing">
        <Link
          className="testing__imgContainer"
          to="/association"
          onClick={() => {
            setAssociation('gourmand');
          }}
          style={{ background: `center / contain no-repeat url(${rondPhoto})` }}
        >
          <img className="testing__img" src={glaces} alt="représentation de la degustation" />
        </Link>
        <h3 className="testing__title">{data.option2}</h3>
      </div>
      <div className="section__testing">
        <Link
          className="testing__imgContainer"
          to="/association"
          onClick={() => {
            setAssociation('exeption');
          }}
          style={{ background: `center / contain no-repeat url(${rondPhoto})` }}
        >
          <img className="testing__img" src={glaces} alt="représentation de la degustation" />
        </Link>
        <h3 className="testing__title">{data.option3}</h3>
      </div>
      <div className="section__testing">
        <Link
          className="testing__imgContainer"
          style={{ background: `center / contain no-repeat url(${rondPhoto})` }}
          to="/association"
          onClick={() => {
            setAssociation('campagne');
          }}
        >
          <img className="testing__img" src={glaces} alt="représentation de la degustation" />
        </Link>
        <h3 className="testing__title">{data.option4}</h3>
      </div>
    </section>
  </main>
);
Page3.propTypes = {
  setAssociation: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    option1: PropTypes.string.isRequired,
    option2: PropTypes.string.isRequired,
    option3: PropTypes.string.isRequired,
    option4: PropTypes.string.isRequired,

  }).isRequired,
};

export default Page3;
