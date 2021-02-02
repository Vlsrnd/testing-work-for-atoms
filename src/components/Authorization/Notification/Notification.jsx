import styles from './Notification.module.css';

export const Notification = ({text, setVisibleNotification, setLoginMode}) => {
  const closeAndSwitchToLogin = () => {
    setVisibleNotification(false);
    setLoginMode();
  }
  return (
    <div className={styles.notification}>
      <div className={styles.text}>{text}</div>
      <button className={styles.ok} onClick={closeAndSwitchToLogin}>Ok</button>
    </div>
  )
};