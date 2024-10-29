// LoginModal.jsx
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useUser } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import modalStyles from '../styles/LoginModal.module.css';
import formStyles from '../styles/Forms.module.css';
import appStyles from '../styles/App.module.css';

function LoginModal({ setShowLoginModal }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUser();
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
    setShowLoginModal(false);
  };

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={300}
      classNames={{
        appear: modalStyles['modal-appear'],
        appearActive: modalStyles['modal-appear-active'],
        appearDone: modalStyles['modal-appear-done'],
        enter: modalStyles['modal-enter'],
        enterActive: modalStyles['modal-enter-active'],
        enterDone: modalStyles['modal-enter-done'],
        exit: modalStyles['modal-exit'],
        exitActive: modalStyles['modal-exit-active'],
        exitDone: modalStyles['modal-exit-done'],
      }}
      unmountOnExit
    >
      <div className={modalStyles.modal}>
        <div 
          className={`${modalStyles['modal-content']} ${
            isDarkMode ? 'dark-theme' : 'light-theme'
          }`}
        >
          <h2>{language === 'uk' ? 'Вхід' : 'Login'}</h2>
          <form onSubmit={handleSubmit} className={modalStyles['login-form']}>
            <div className={modalStyles['input-group']}>
              <input
                type="text"
                placeholder={language === 'uk' ? "Ім'я користувача" : 'Username'}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={formStyles.input}
              />
            </div>
            <div className={modalStyles['input-group']}>
              <input
                type="password"
                placeholder={language === 'uk' ? 'Пароль' : 'Password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={formStyles.input}
              />
            </div>
            <div className={modalStyles['button-group']}>
              <button type="submit" className={formStyles.button}>
                {language === 'uk' ? 'Увійти' : 'Login'}
              </button>
              <button 
                type="button" 
                onClick={() => setShowLoginModal(false)} 
                className={formStyles.button}
              >
                {language === 'uk' ? 'Скасувати' : 'Cancel'}
              </button>
            </div>
          </form>
          <div className={modalStyles['register-section']}>
            <p>
              {language === 'uk' ? "Немає облікового запису? " : "Don't have an account? "}
              <a href="#" className={appStyles['registr-a']}>
                {language === 'uk' ? 'Зареєструйтесь тут' : 'Register here'}
              </a>
            </p>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default LoginModal;