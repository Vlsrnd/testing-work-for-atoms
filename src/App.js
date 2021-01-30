import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';


const Main = (props) => {
  return <div>Main</div>
};
const Rules = () => <div className='bigText' >rules</div>;
const Prizes = () => <div className='bigText' >prizes</div>;
const Winners = () => <div className='bigText' >winners</div>;
const Feedback = () => <div className='bigText' >feedback</div>;
const Login = () => <div>there is login</div>;

const App = () => {
  return (
    <div>
      <Header />
      <main className='container'>
        <Route exact path='/' render={() => <Main />} />
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  )
}

export default WrappedApp;
