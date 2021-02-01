import { useForm } from 'react-hook-form';
import styles from './Login.module.css';

export const Login = ({setRegistrationMode}) => {
  const {register, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit(onSubmit)}>
          <header>Авторизация</header>
          <div className={styles.email}>
            <input ref={register({required: true})} name='first_name' 
              className={errors.first_name && styles.error} type='text' placeholder='Имя' />
          </div>
          <div className={styles.password}>
            <input ref={register({required: true})} name='last_name' 
              className={errors.last_name && styles.error} type='text' placeholder='Фамилия' />
          </div>
          <div className={styles.forgetPassword}>Забыл пароль?</div>
          <button className={styles.submitBtn} type='submit'>ВОЙТИ</button>
      </form>
      <button onClick={setRegistrationMode}>Регистрация</button>
    </div>
  )
};