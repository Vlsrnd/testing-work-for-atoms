import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Main from './components/Main/Main';

const Rules = () => <div className='emptyPage' >rules</div>;
const Prizes = () => <div className='emptyPage' >prizes</div>;
const Winners = () => <div className='emptyPage' >winners</div>;
const Feedback = () => <div className='emptyPage' >feedback</div>;

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Login />
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
