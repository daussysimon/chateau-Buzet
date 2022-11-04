import PropTypes from 'prop-types';
import { useState } from 'react';
import mainLogo from 'src/assets/pictures/main_logo.png';
import bottlePage1 from 'src/assets/pictures/bottle_page1.png';
import { Link } from 'react-router-dom';

const Header = ({
  pageNumber, langage, setLangage, data, isMobile,
}) => {
  const [burgerOpen, setBurgerOpen] = useState(undefined);
  return (
    <header className="header">
      <Link to="/" className="header__img">
        <img className="header__img" src={mainLogo} alt="logo du site représente l'entité de la marque" />
      </Link>
      {pageNumber > 1 && !isMobile
        && (
          <h1 className="header__title">Château Buzet<span className="title__separator"> | </span><span className="title__slogan">{data.subtitle}</span></h1>
        )}
      {!isMobile
        ? (
          <nav className="header__nav">
            <button type="button" className={langage === 'fr' ? 'nav__button--selected nav__button' : 'nav__button'} onClick={() => setLangage('fr')}>FR</button>
            <span className="nav__spleater">/</span>
            <button type="button" className={langage === 'en' ? 'nav__button--selected nav__button' : 'nav__button'} onClick={() => setLangage('en')}>EN</button>
          </nav>
        )
        : (
          <div
            className={burgerOpen ? 'header__burger header__burger--open' : 'header__burger'}
            onClick={() => setBurgerOpen(!burgerOpen)}
          >
            <span> </span>
            <span> </span>
          </div>
        )}
      {burgerOpen && (
        <div className={burgerOpen ? 'nav__mobile nav__mobile--open' : 'nav__mobile'}>
          <nav className="header__nav">
            <button type="button" className={langage === 'fr' ? 'nav__button--selected nav__button' : 'nav__button'} onClick={() => setLangage('fr')}>FR</button>
            <span className="nav__spleater">/</span>
            <button type="button" className={langage === 'en' ? 'nav__button--selected nav__button' : 'nav__button'} onClick={() => setLangage('en')}>EN</button>
          </nav>
          <span className="span__separator"> </span>
          <h1 className="header__title">Château Buzet<span className="title__separator"> | </span><span className="title__slogan">{data.subtitle}</span></h1>
          <img src={bottlePage1} alt="logo" />
          <span className="span__separator"> </span>
          <Link to="/mentions_legales" className="footer__link">{data.link}</Link>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  langage: PropTypes.string.isRequired,
  setLangage: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,

};

export default Header;
