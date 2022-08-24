import PropTypes from 'prop-types';
import mainLogo from 'src/assets/pictures/main_logo.png';

const Header = ({ pageNumber, langage, setLangage }) => (
  <header className="header">
    <img className="header__img" src={mainLogo} alt="logo du site représente l'entité de la marque" />
    {pageNumber > 1
      && (
        <h1 className="header__title">Château Buzet<span className="title__separator"> | </span><span className="title__slogan">La renaissance d'un patrimoine millénaire</span></h1>
      )}
    <nav className="header__nav">
      <button type="button" className={langage === 'fr' ? 'nav__button--selected nav__button' : 'nav__button'} onClick={() => setLangage('fr')}>FR</button>
      <span className="nav__spleater">/</span>
      <button type="button" className={langage === 'en' ? 'nav__button--selected nav__button' : 'nav__button'} onClick={() => setLangage('en')}>EN</button>
    </nav>
  </header>
);

Header.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  langage: PropTypes.string.isRequired,
  setLangage: PropTypes.func.isRequired,

};

export default Header;
