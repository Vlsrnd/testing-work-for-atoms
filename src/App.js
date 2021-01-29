import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import './App.css';

const Header = (props) => {
  const navLinks = [
    {link: '', text: 'главная'},
    {link: 'rules', text:'правила акции'}, 
    {link: 'prizes', text: 'призы'}, 
    {link: 'winners', text: 'победители'}, 
    {link: 'feedback', text: 'обратная связь'}, 
    {link: 'login', text: 'войти'}]
    .map(title => <li><NavLink to={title.link}>{title.text}</NavLink></li>);
  return (
    <ul>
      {navLinks};
    </ul>
  )
};
const Main = (props) => {
  return <div>Main</div>
}
const Rules = () => <div>there is rules</div>;
const Prizes = () => <div>there is prizes</div>;
const Winners = () => <div>there is winners</div>;
const Feedback = () => <div>there is feedback</div>;
const Login = () => <div>there is login</div>;

const App = () => {
  return (

    <div className='container'>
      <Header />
      <main>
        <Route path='' render={() => <Main />} />
        <Route path='/rules' render={() => <Rules />} />
        <Route path='/prizes' render={() => <Prizes />} />
        <Route path='/winners' render={() => <Winners />} />
        <Route path='/feedback' render={() => <Feedback />} />
        <Route path='/login' render={() => <Login />} />
      </main>
    </div>
  );
}

const WrappedApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default WrappedApp;
