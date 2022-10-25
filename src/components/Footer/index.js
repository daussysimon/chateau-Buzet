import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Footer = ({ data }) => (
  <footer className="footer">
    <p className="footer__para">{data.para}</p>
    <Link to="/mentions_legales" className="footer__link">{data.link}</Link>
  </footer>
);

Footer.propTypes = {
  data: PropTypes.shape({
    para: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Footer;
