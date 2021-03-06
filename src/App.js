import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Authorization from './components/Authorization/Authorization';
import Main from './components/Main/Main';
import { useState } from 'react';

const Rules = () => <div className='emptyPage' >rules</div>;
const Prizes = () => <div className='emptyPage' >prizes</div>;
const Winners = () => <div className='emptyPage' >winners</div>;
const Feedback = () => <div className='emptyPage' >feedback</div>;
const Profile = ({state}) => <div className='emptyPage'>Личный кабинет</div>;

const App = () => {
  const [isAuthorizationVisible, setAuthorizationVisibility] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const [state, setState] = useState({});

  const showAuthorization = () => setAuthorizationVisibility(true);
  const hideAuthorization = () => setAuthorizationVisibility(false);
  
  return (
    <div className='app'>
      <Header showAuthorization={showAuthorization} isAuth={isAuth} />
      {isAuthorizationVisible && 
        <Authorization hideAuthorization={hideAuthorization} setAuth={setAuth} 
          setState={setState} />}
      <main className='container'>
        <Route exact path='/' render={() => <Main />} />
        <Route path='/rules' render={() => <Rules />} />
        <Route path='/prizes' render={() => <Prizes />} />
        <Route path='/winners' render={() => <Winners />} />
        <Route path='/feedback' render={() => <Feedback />} />
        <Route path='/profile' render={() => <Profile state={state} />} />
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
