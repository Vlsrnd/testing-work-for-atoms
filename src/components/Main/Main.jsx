import ConcentricDiv from './ConcentricDiv/ConcentricDiv';
import styles from './Main.module.css';

import prizesImg from '../../assets/img/prizes.png';
import superPrizeImg from '../../assets/img/super-prize.png';
import { CentralImg } from './CentralImg/CentralImg';

const Main = () => {
  const text = <div>ЗАРЕГИСТРИРОВАТЬ ЧЕК</div>;
  const prizesImgElement = <img src={prizesImg} alt='prizes' />;
  const superPrizeImgElement = <img src={superPrizeImg} alt='super prize' />;
  return (
    <div>
      <div className={styles.greenCircle}></div>
      <div className={styles.leftConcentricDiv}>
        <ConcentricDiv element={text} width={284} height={60} numberLines={3} />
      </div>
      <div className={styles.rightTopConcentricDiv}>
        <ConcentricDiv element={prizesImgElement}
          width={126} height={126} />
      </div>
      <div className={styles.rightBottomConcentricDiv}>
        <ConcentricDiv element={superPrizeImgElement}
          width={132} height={129} />
      </div>
      <div className={styles.centralImg}>
        <CentralImg />
      </div>
    </div>
  )
};

export default Main;