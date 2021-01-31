import styles from './Header.module.css';
import { useState } from "react";
import { NavLink } from 'react-router-dom';

import logoImg from '../../assets/img/logo.png';
import mobileMenuBtnImg from '../../assets/img/mobile-menu-btn.png';
import mobileMenuBtnCloseImg from '../../assets/img/mobile-menu-btn-close.png';

const LoginBtn = (props) => {
  return (
    <NavLink to='login' className={styles.loginBtn}>
      {props.isAuth ? props.userName : props.isMobile ? 'ЛИЧНЫЙ КАБИНЕТ' : 'ВОЙТИ'}
    </NavLink>
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

const MobileMenu = (props) => {
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
          <LoginBtn isAuth={props.isAuth} isMobile={true} />
        </ul>
      )}
    </div>
  )
};

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img className={styles.logoImg} src={logoImg} alt='logo'></img>
      <nav className={styles.navList}>
        <ul>
          <NavLinks />
          <LoginBtn isAuth={props.isAuth}/>
        </ul>
      </nav>
      <MobileMenu {...props} />
    </header>
  )
};

export default Header;