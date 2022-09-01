import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import secondLogo from 'src/assets/pictures/second_logo.png';
import testing from 'src/assets/pictures/glaces.jpeg';

const Page4 = ({ association, data }) => (
  <main className="main main--association">
    <aside className="association__aside">
      <img alt="représentation d'une scene de dégustation" src={testing} />
    </aside>
    <section className="assocation__container">
      <h1>{data.title}</h1>
      <img alt="logo" src={secondLogo} className="association__logo" />
      <h3 className="association__title"><strong>{data[association].title} :</strong> {data[association].subtitle}</h3>
      <p className="association__para">{data[association].text} </p>
    </section>
    <button type="button" className="button__container">
      <Link to="/" className="button">
        Merci
      </Link>
    </button>
  </main>
);

Page4.propTypes = {
  association: PropTypes.string.isRequired,
  data: PropTypes.shape({

  }).isRequired,
};

export default Page4;
