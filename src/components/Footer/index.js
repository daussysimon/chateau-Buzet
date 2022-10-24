import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <p className="footer__para">L’ABUS D’ALCOOL EST DANGEREUX POUR LA SANTÉ. À CONSOMMER AVEC MODÉRATION</p>
    <Link to="/mentions_legales" className="footer__link">Mentions légales</Link>
  </footer>
);

export default Footer;
