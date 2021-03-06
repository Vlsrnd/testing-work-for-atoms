import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

import styles from './Registration.module.css';

import { CustomCheckbox } from '../../common/CustomCheckbox';
import { Notification } from '../Notification/Notification';
import { requestToRegisterUser } from '../../../api/api';

import attentionImg from '../../../assets/img/attention.svg';
import commonErrorCloseImg from '../../../assets/img/red-close.svg';
import closeBtn from '../../../assets/img/mobile-menu-btn-close.svg';

const CommonError = ({clearErrors}) => {
  return (
    <div className={styles.commonError}>
      <div className={styles.attention}>
        <img src={attentionImg} alt='!' />
      </div>
      <div className={styles.commonErrorText}>Внимание! Одно или несколько полей не 
      заполнены или заполнены неверно. Проверь корректность заполнения полей.</div>
      <div className={styles.commonErrorClose}>
        <img src={commonErrorCloseImg} alt='X' onClick={() => clearErrors()}/>
      </div>
    </div>
  )
};

export const Registration = ({setLoginMode, hideAuthorization}) => {
  const [isNotificationVisible, setVisibleNotification] = useState(false);
  const [notificationText, setNotificationText] = useState('');
  const [isBlocked, setBlock] = useState(false);
  const block = () => setBlock(true);
  const unblock = () => setBlock(false);

  const {register, handleSubmit, errors, clearErrors} = useForm({
    mode: 'onTouched',
    shouldFocusError: false
  });

  const onSubmit = async (formData) => {
    block();
    try {
      const response = await requestToRegisterUser(formData);
      setNotificationText(response.alert);
      setVisibleNotification(true);
    } catch (err) {
      alert(`Что-то пошло не так, обратитесь в службу поддержки. ${err}`);
      unblock();
    }
  };

  const rules = (
    <div>Я прочитал и согласен с <a href='http://www.google.com'>Правилами акции</a>
    и <a href='http://www.google.com'>Пользовательским соглашением</a>,
    согласен на обработку персональных данных</div>
  );
  const agreementsEmail = <div>Я  согласен получать информацию об акции по E-mail</div>;
  const agreementsSms = <div>Я  согласен получать информацию об акции по смс</div>;
  
  return (
    <div className={styles.registration}>
      {isNotificationVisible && <Notification text={notificationText} unblock={unblock}
        setVisibleNotification={setVisibleNotification} setLoginMode={setLoginMode} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <img className={styles.closeBtn} src={closeBtn} alt='X' onClick={hideAuthorization} />
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
          <InputMask mask="+7 (999) 999-99-99" placeholder='Телефон'
            inputRef={register({required: true, pattern: /\+[0-9]\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/})} 
            name='phone' className={errors.phone && styles.error} />
        </div>
        <div className={`${styles.customCheckbox} ${styles.rulesCheckbox}`}>
          <CustomCheckbox name='rules' label={rules} 
            reactHookFormRegister={register({required: true})} errors={errors.rules} />
        </div>
        <div className={`${styles.customCheckbox} ${styles.emailCheckbox}`}>
          <CustomCheckbox name='agreements' label={agreementsEmail} 
            reactHookFormRegister={register({required: true})} errors={errors.agreements}/>
        </div>
        <div className={`${styles.customCheckbox} ${styles.smsCheckbox}`}>
          <CustomCheckbox name='agreements_sms' label={agreementsSms} 
            reactHookFormRegister={register} />
        </div>
        {!!Object.keys(errors).length && <CommonError clearErrors={clearErrors}/>}
        <button disabled={isBlocked} className={styles.submitBtn} type='submit'>ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </form>
        <button disabled={isBlocked} onClick={setLoginMode} className={styles.autorizeBtn}>АВТОРИЗОВАТЬСЯ</button>
    </div>
  )
};

