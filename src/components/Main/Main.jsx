import ConcentricDiv from './ConcentricDiv/ConcentricDiv';
import styles from './Main.module.css';

import prizesImg from '../../assets/img/prizes.png';
import superPrizeImg from '../../assets/img/super-prize.png';
import centralImg from '../../assets/img/centralImg.png';
import logo from '../../assets/img/logo.png';

const Main = () => {
  const billText = <div>ЗАРЕГИСТРИРОВАТЬ ЧЕК</div>;
  const prizesImgElement = <img src={prizesImg} alt='prizes' />;
  const superPrizeImgElement = <img src={superPrizeImg} alt='super prize' />;
  return (
    <div className={styles.main}>
      <div className={styles.greenCircle} />
      <div className={styles.leftColumn}>
        <div>Отмечай</div>
        <div>на все  130%</div>
        <div className={styles.bill}>
          <ConcentricDiv element={billText} width={284} height={60} numberLines={3} />
        </div>
        <div>Подарки начинаются с</div>
        <img src={logo} alt='BORJOMI'/>
      </div>
      <div className={styles.centralColumn}>
        <div className={styles.centralImg}>
          <img src={centralImg} 
            alt='bottle tree and men' /> 
        </div>
        <div className={styles.mobileBill}>{billText}</div>
        <div className={styles.mobileRules}>Правила акции</div>
        <div className={styles.mobileUserDeal}>Пользовательское соглашение</div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.prizes}>
        <div>Учавствуй</div>
        <div>в розыгрыше</div>
        <div>стильных призов</div>
        <div className={styles.picture}>
          <ConcentricDiv element={prizesImgElement}
            width={126} height={126} />
        </div>
        </div>
        <div className={styles.superPrize}>
          <div>Получи шанс</div>
          <div>выиграть</div>
          <div className={styles.picture}>
            <ConcentricDiv element={superPrizeImgElement}
              width={132} height={129} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Main;