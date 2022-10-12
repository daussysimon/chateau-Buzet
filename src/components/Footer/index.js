import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <p className="footer__para">l'abus d'alcool est dangereux pour la santé. a consommer avec modération</p>
    <Link to="/mentions légales" className="footer__link">Mentions légales</Link>
  </footer>
);

export default Footer;
