import { NavLink } from "react-router-dom";
import styles from './Header.module.css';

const LoginBtn = (props) => <NavLink to='login' className={styles.loginBtn}>{props.isAuth ? props.userName : 'ВОЙТИ'}</NavLink>;

const Header = (props) => {
  const navLinks = [
    {link: '', text: 'главная'},
    {link: 'rules', text:'правила акции'}, 
    {link: 'prizes', text: 'призы'}, 
    {link: 'winners', text: 'победители'}, 
    {link: 'feedback', text: 'обратная связь'}] 
    .map(title => <li><NavLink to={title.link} key={title.link + title.text}>{title.text}</NavLink></li>);
  return (
    <header className={styles.header}>
      <img className={styles.logoImg} src='#' alt='logo'></img>
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