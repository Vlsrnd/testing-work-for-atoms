import styles from './ConcentricDiv.module.css';

const ConcentricDiv = ({element, width = 120, height = 120, numberLines = 2}) => {
  const style = {
    width: width + 'px',
    height: height + 'px'
  };
  if (numberLines === 3) return (
    <div className={styles.withWrapperThree} style={style}>
      <div className={styles.additionalLine}></div>
      {element}
    </div>)
  else return (
    <div className={styles.withWrapperTwo} style={style}>
      {element}
    </div>
  )
};

export default ConcentricDiv;