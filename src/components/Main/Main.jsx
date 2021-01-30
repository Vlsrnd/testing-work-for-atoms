import ConcentricDiv from './ConcentricDiv/ConcentricDiv';
import styles from './Main.module.css';

const Main = (props) => {
  const text = <div>tesdfsxt</div>;
  return (
    <div>
      <div className={styles.greenCircle}></div>
      <ConcentricDiv element={text} width={150} height={150}/>
    </div>
  )
};

export default Main;