import { useState } from 'react';
import { Login } from './Login/Login';
import { Registration } from './Registration/Registration';
import styles from './Authorization.module.css';

const Authorization = ({hideAuthorization}) => {
  const [isLoginMode, setMode] = useState(true);
  const setLoginMode = () => setMode(true);
  const setRegistrationMode = () => setMode(false);
  return (
    <div className={styles.modal}>
      {isLoginMode && <Login setRegistrationMode={setRegistrationMode} hideAuthorization={hideAuthorization} />}
      {!isLoginMode && <Registration setLoginMode={setLoginMode} hideAuthorization={hideAuthorization} />}
    </div>
  )
};

export default Authorization;