import styles from './CentralImg.module.css';

import manImg from '../../../assets/img/man.png';
import treeAndBottleImg from '../../../assets/img/treeAndBottle.png';

export const CentralImg = () => {
  return (
    <div className={styles.centralImg}>
      <img className={styles.treeAndBottle} src={treeAndBottleImg} alt='tree' />
      <img className={styles.men} src={manImg} alt='men' />
    </div>
  )
}
