import styles from './Notification.module.css';

export const Notification = ({text, unblock, setVisibleNotification, setLoginMode}) => {
  const closeUnblockAndSwitchToLogin = () => {
    unblock();
    setVisibleNotification(false);
    setLoginMode();
  }
  return (
    <div className={styles.notification}>
      <div className={styles.text}>{text}</div>
      <button className={styles.ok} onClick={closeUnblockAndSwitchToLogin}>Ok</button>
    </div>
  )
};