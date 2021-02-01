import styles from './CustomCheckbox.module.css';

export const CustomCheckbox = ({name, label, reactHookFormRegister, errors}) => {
  return (
    <>
    <input className={styles.customCheckbox} ref={reactHookFormRegister} type='checkbox' name={name} id={name} />
    <label htmlFor={name}><div className={`${styles.box} ${errors && styles.errorBox}`}></div>{label}</label>
    </>
  )
};