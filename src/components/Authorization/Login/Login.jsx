import { useForm } from 'react-hook-form';
import styles from './Login.module.css';

import closeBtn from '../../../assets/img/mobile-menu-btn-close.svg';
import { requestToAuthorize } from '../../../api/api';
import { useState } from 'react';
import { Notification } from '../Notification/Notification';

export const Login = ({setRegistrationMode, hideAuthorization, setAuth, setState}) => {
  const [isNotificationVisible, setVisibleNotification] = useState(false);
  const [notificationText, setNotificationText] = useState('');
  const [isBlocked, setBlock] = useState(false);
  const block = () => setBlock(true);
  const unblock = () => setBlock(false);

  const {register, handleSubmit, errors} = useForm({
    mode: 'onTouched',
    shouldFocusError: false
  });

  const onSubmit = async (formData) => {
    block()
    try {
      const response = await requestToAuthorize(formData);
      const {message, data} = response;
      setNotificationText(message);
      setVisibleNotification(true);
      setAuth(true);
      setState(data);
    } catch (err) {
      alert(err);
      unblock();
    }
  }

  return (
    <div className={styles.login}>
      {isNotificationVisible && <Notification text={notificationText} unblock={unblock}
        setVisibleNotification={setVisibleNotification} hideAuthorization={hideAuthorization} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <img className={styles.closeBtn} src={closeBtn} alt='X' onClick={hideAuthorization} />
        <header>Авторизация</header>
        <div className={styles.email}>
          <input ref={register({required: true})} name='username' 
            className={errors.username && styles.error} type='email' placeholder='E-mail' />
        </div>
        <div className={styles.password}>
          <input ref={register({required: true, minLength: 6})} name='password' 
            className={errors.password && styles.error} type='password' placeholder='Пароль' />
        </div>
        <div className={styles.forgetPassword}>Забыл пароль?</div>
        <button disabled={isBlocked} className={styles.submitBtn} type='submit'>ВОЙТИ</button>
      </form>
      <button disabled={isBlocked} className={styles.registrationBtn} onClick={setRegistrationMode}>Регистрация</button>
    </div>
  )
};