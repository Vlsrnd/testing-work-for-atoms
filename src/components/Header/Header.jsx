import styles from './Header.module.css';
import { useState } from "react";
import { NavLink } from 'react-router-dom';

import logoImg from '../../assets/img/logo.png';
import mobileMenuBtnImg from '../../assets/img/mobile-menu-btn.png';
import mobileMenuBtnCloseImg from '../../assets/img/mobile-menu-btn-close.png';

const LoginBtn = ({isAuth, userName, isMobile, showAuthorization}) => {
  return (
    <div className={styles.loginBtn} onClick={showAuthorization}>
      {isAuth ? userName : isMobile ? 'ЛИЧНЫЙ КАБИНЕТ' : 'ВОЙТИ'}
    </div>
  )
};

const NavLinks = () => {
  return [
      {link: '/', text: 'главная', isExact: true},
      {link: '/rules', text:'правила акции'}, 
      {link: '/prizes', text: 'призы'}, 
      {link: '/winners', text: 'победители'}, 
      {link: '/feedback', text: 'обратная связь'},
    ].map(title => {
        return (
          <li key={title.link + title.text}><NavLink 
            exact={title.isExact}
            to={title.link} 
            activeClassName={styles.activeLink}>
            {title.text}
          </NavLink></li>
        );
      });
};

const MobileMenu = ({isAuth, showAuthorization}) => {
  const [isOpen, setState] = useState(false);
  const openCloseMenu = () => setState(prevState => !prevState);
  return (
    <div className={styles.mobileMenu}>
      {!isOpen && 
      <div className={`${styles.mobileMenuIcon} ${styles.mobileMenuIconOpen}`} >
        <img onClick={openCloseMenu} src={mobileMenuBtnImg} alt='menu' />
      </div>}
      {isOpen && (
        <ul onClick={openCloseMenu} className={styles.mobileMenuList}>
          <div className={`${styles.mobileMenuIcon} ${styles.mobileMenuIconClose}`} >
            <img src={mobileMenuBtnCloseImg} alt='close' />
          </div>
          <NavLinks />
          <LoginBtn isAuth={isAuth} isMobile={true} showAuthorization={showAuthorization} />
        </ul>
      )}
    </div>
  )
};

const Header = ({isAuth, showAuthorization}) => {
  return (
    <header className={styles.header}>
      <img className={styles.logoImg} src={logoImg} alt='logo'></img>
      <nav className={styles.navList}>
        <ul>
          <NavLinks />
          <LoginBtn isAutn={isAuth} showAuthorization={showAuthorization} />
        </ul>
      </nav>
      <MobileMenu />
    </header>
  )
};

export default Header;