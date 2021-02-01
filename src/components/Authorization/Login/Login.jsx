import { useForm } from 'react-hook-form';
import styles from './Login.module.css';

import closeBtn from '../../../assets/img/mobile-menu-btn-close.svg';
import { getPublicToken } from '../../../api/api';

export const Login = ({setRegistrationMode, hideAuthorization}) => {
  const {register, handleSubmit, errors} = useForm({
    mode: 'onTouched',
    shouldFocusError: false
  });
  const onSubmit = () => getPublicToken();
  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img className={styles.closeBtn} src={closeBtn} alt='X' onClick={hideAuthorization} />
        <header>Авторизация</header>
        <div className={styles.email}>
          <input ref={register({required: true})} name='username' 
            className={errors.username && styles.error} type='email' placeholder='E-mail' />
        </div>
        <div className={styles.password}>
          <input ref={register({required: true, minLength: 7})} name='password' 
            className={errors.password && styles.error} type='password' placeholder='Пароль' />
        </div>
        <div className={styles.forgetPassword}>Забыл пароль?</div>
        <button className={styles.submitBtn} type='submit'>ВОЙТИ</button>
      </form>
      <button onClick={setRegistrationMode}>Регистрация</button>
    </div>
  )
};