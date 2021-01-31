import { Field, Form, Formik } from 'formik';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.login}>
        <Formik initialValues={{ email: '', password: '' }}
          onSubmit={(values) => alert(values.email + '   ' + values.password)}>
            <Form>
              <header>Авторизация</header>
              <div className={styles.email}>
                <Field name='email' type='email' placeholder='E-mail' />
              </div>
              <div>
                <Field name='password' type='password' placeholder='Пароль' />
              </div>
              <div className={styles.forgetPassword}>Забыл пароль?</div>
              <button type='submit'>ВОЙТИ</button>
            </Form>
          </Formik>
          <button>Регистрация</button>
      </div>
    </div>
  )
};

export default Login;