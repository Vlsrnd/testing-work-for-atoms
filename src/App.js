import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';


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
        <Route exact path='' render={() => <Main />} />
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
