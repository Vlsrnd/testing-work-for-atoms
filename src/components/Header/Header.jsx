import { NavLink } from "react-router-dom";
import styles from './Header.module.css';
import logo from '../../assets/img/logo.png';

const LoginBtn = (props) => {
  return (
    <NavLink to='login' className={styles.loginBtn}>
      {props.isAuth ? props.userName : 'ВОЙТИ'}
    </NavLink>
  )
};

const Header = (props) => {
  const navLinks = [
    {link: '', text: 'главная'},
    {link: 'rules', text:'правила акции'}, 
    {link: 'prizes', text: 'призы'}, 
    {link: 'winners', text: 'победители'}, 
    {link: 'feedback', text: 'обратная связь'}] 
    .map(title => {
      return (
        <li><NavLink to={title.link} key={title.link + title.text}>
          {title.text}
        </NavLink></li>
      );
    });
  return (
    <header className={styles.header}>
      <img className={styles.logoImg} src={logo} alt='logo'></img>
      <nav className={styles.navList}>
        <ul>
          {navLinks}
          <LoginBtn isAuth={props.isAuth}/>
        </ul>
      </nav>
    </header>
  )
};

export default Header;