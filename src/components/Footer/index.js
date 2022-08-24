import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Footer = ({ pageNumber }) => (
  <footer className="footer">
    <p className="footer__para">l'abus d'alcool est dangereux pour la santé. a consommer avec modération</p>
    {pageNumber > 1 && <Link to="/mentions légales" className="footer__link">mentions légales</Link>}
  </footer>
);
Footer.propTypes = {
  pageNumber: PropTypes.number.isRequired,
};
export default Footer;
