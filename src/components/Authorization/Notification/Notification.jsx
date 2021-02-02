import styles from './Notification.module.css';

export const Notification = 
  ({text, unblock, setVisibleNotification, 
    setLoginMode = () => {return},
    hideAuthorization = () => {return}}) => {
  const closeUnblockAndSwitchToLogin = () => {
    unblock();
    setVisibleNotification(false);
    setLoginMode();
    hideAuthorization();
  }
  return (
    <div className={styles.notification}>
      <div className={styles.text}>{text}</div>
      <button className={styles.ok} onClick={closeUnblockAndSwitchToLogin}>Ok</button>
    </div>
  )
};