import styles from './ConcentricDiv.module.css';

const ConcentricDiv = ({element, width = 120, height = 120, numberLines = 2}) => {
  const style = {
    width: width + 'px',
    height: height + 'px'
  };
  return (
    <div className={styles.withWrapper} style={style} >
      {numberLines === 3 && <div className={styles.additionalLine}></div>}
      {element}
    </div>
  )
};

export default ConcentricDiv;