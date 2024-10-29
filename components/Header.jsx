// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrency } from '../contexts/CurrencyContext';
import { useUser } from '../contexts/UserContext';
import headerStyles from '../styles/Header.module.css';
import toggleStyles from '../styles/ToggleSwitch.module.css';

function Header({ setShowLoginModal, setShowDebug, showDebug, logo, setIsDarkMode }) {
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { currency, toggleCurrency } = useCurrency();
  const { user, logout } = useUser();

  const handleThemeToggle = () => {
    toggleTheme();
    setIsDarkMode(!isDarkMode);
  };

  const handleLoginLogout = () => {
    if (user) {
      logout();
    } else {
      setShowLoginModal(true);
    }
  };

  return (
    <header className={`${headerStyles.header} ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <div className={headerStyles.logo}>
        <img src={logo} alt="Pet Store Logo" />
        <h1>Pet Store</h1>
      </div>
      <nav className={headerStyles['nav-links']}>
        <Link to="/" className={headerStyles['nav-link']}>
          {language === 'uk' ? 'Головна' : 'Home'}
        </Link>
        <Link to="/promotions" className={headerStyles['nav-link']}>
          {language === 'uk' ? 'Акції' : 'Promotions'}
        </Link>
        <Link to="/new" className={headerStyles['nav-link']}>
          {language === 'uk' ? 'Новинки' : 'New Arrivals'}
        </Link>
        <Link to="/brands" className={headerStyles['nav-link']}>
          {language === 'uk' ? 'Бренди' : 'Brands'}
        </Link>
        <Link to="/about" className={headerStyles['nav-link']}>
          {language === 'uk' ? 'Про нас' : 'About'}
        </Link>
        <Link to="/category/dogs" className={headerStyles['nav-link']}>
          {language === 'uk' ? 'Собаки' : 'Dogs'}
        </Link>
        <Link to="/category/cats" className={headerStyles['nav-link']}>
          {language === 'uk' ? 'Коти' : 'Cats'}
        </Link>
        <button className={headerStyles['nav-link']} onClick={toggleLanguage}>
          {language === 'uk' ? 'EN' : 'UA'}
        </button>
        <button className={headerStyles['nav-link']} onClick={toggleCurrency}>
          {currency === 'UAH' ? 'USD' : 'UAH'}
        </button>
        <button className={headerStyles['nav-link']} onClick={() => setShowDebug(!showDebug)}>
          Debug
        </button>
        <div className={toggleStyles.toggleContainer}>
          <label className={toggleStyles.themeSwitch}>
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={handleThemeToggle}
              className={toggleStyles.input}
            />
            <span className={toggleStyles.slider}></span>
          </label>
        </div>
        <button className={headerStyles['nav-link']} onClick={handleLoginLogout}>
          {user 
            ? (language === 'uk' ? 'Вийти' : 'Logout')
            : (language === 'uk' ? 'Увійти' : 'Login')
          }
        </button>
      </nav>
    </header>
  );
}

export default Header;