import { useForm } from 'react-hook-form';
import { CustomCheckbox } from '../../common/CustomCheckbox';
import styles from './Registration.module.css';

import attentionImg from '../../../assets/img/attention.png';
import commonErrorCloseImg from '../../../assets/img/red-close.png';
import { useState } from 'react';

const CommonError = ({hideCommonError}) => {
  return (
    <div className={styles.commonError}>
      <div className={styles.attention}>
        <img src={attentionImg} alt='!' />
      </div>
      <div className={styles.commonErrorText}>Внимание! Одно или несколько полей не 
      заполнены или заполнены неверно. Проверь корректность заполнения полей.</div>
      <div className={styles.commonErrorClose}>
        <img src={commonErrorCloseImg} alt='X' onClick={hideCommonError}/>
      </div>
    </div>
  )
};

export const Registration = ({setLoginMode}) => {
  const {register, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);
  const [isCommonErrorVisible, setCommonErrorVisible] = useState(false);
  const showCommonError = () => setCommonErrorVisible(true);
  const hideCommonError = () => setCommonErrorVisible(false);

  const rules = (
    <div>Я прочитал и согласен с 
    <a href='http://www.google.com'>Правилами акции</a>
    и <a href='http://www.google.com'>Пользовательским соглашением</a>,
    согласен на обработку персональных данных</div>
  );
  const agreementsEmail = <div>Я  согласен получать информацию об акции по E-mail</div>;
  const agreementsSms = <div>Я  согласен получать информацию об акции по смс</div>;
  
  return (
    <div className={styles.registration}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <header>Регистрация</header>
        <div className={styles.firstNameLastName}>
          <input ref={register({required: true})} name='first_name' 
            className={errors.first_name && styles.error} type='text' placeholder='Имя' />
          <input ref={register({required: true})} name='last_name' 
            className={errors.last_name && styles.error} type='text' placeholder='Фамилия' />
        </div>
        <div className={styles.emailPhone}>
          <input ref={register({required: true})} name='email' 
            className={errors.email && styles.error} type='email' placeholder='E-mail' />
          <input ref={register({required: true})} name='phone' 
            className={errors.phone && styles.error} type='phone' placeholder='Телефон' />
        </div>
        <div className={`${styles.customCheckbox} ${styles.rulesCheckbox}`}>
          <CustomCheckbox name='rules' label={rules} 
            reactHookFormRegister={register({required: true})} errors={errors.rules} />
        </div>
        <div className={`${styles.customCheckbox} ${styles.emailCheckbox}`}>
          <CustomCheckbox name='agreements_email' label={agreementsEmail} 
            reactHookFormRegister={register} />
        </div>
        <div className={`${styles.customCheckbox} ${styles.smsCheckbox}`}>
        <CustomCheckbox name='agreements_sms' label={agreementsSms} 
          reactHookFormRegister={register} />
        </div>
        {isCommonErrorVisible && <CommonError hideCommonError={hideCommonError} />}
        {!!Object.keys(errors).length && showCommonError()}
        <button className={styles.submitBtn} type='submit'>ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </form>
        <button onClick={setLoginMode} className={styles.autorizeBtn}>АВТОРИЗОВАТЬСЯ</button>
    </div>
  )
};

