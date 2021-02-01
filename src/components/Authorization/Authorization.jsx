import { useState } from 'react';
import { Login } from './Login/Login';
import { Registration } from './Registration/Registration';
import styles from './Authorization.module.css';

const Authorization = () => {
  const [isLoginMode, setMode] = useState(true);
  const setLoginMode = () => setMode(true);
  const setRegistrationMode = () => setMode(false);
  return (
    <div className={styles.modal}>
      {isLoginMode && <Login setRegistrationMode={setRegistrationMode}/>}
      {!isLoginMode && <Registration setLoginMode={setLoginMode}/>}
    </div>
  )
};

export default Authorization;