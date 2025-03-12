import styles from "../../styles/Home.module.css";

const KeyboardRow = () => {
  return (
    <section>
      <h2 className={styles.subtitle}>Starting Position</h2>
      <div className={styles.keyboardContainer}>
        <div className={styles.keyRow}>
          <div className={`${styles.key} ${styles.keyA}`}>A</div>
          <div className={`${styles.key} ${styles.keyS}`}>S</div>
          <div className={`${styles.key} ${styles.keyD}`}>D</div>
          <div className={`${styles.key} ${styles.keyF}`}>F</div>
        </div>
        <div className={styles.space}></div>
        <div className={styles.keyRow}>
          <div className={`${styles.key} ${styles.keyJ}`}>J</div>
          <div className={`${styles.key} ${styles.keyK}`}>K</div>
          <div className={`${styles.key} ${styles.keyL}`}>L</div>
          <div className={`${styles.key} ${styles.keySemicolon}`}>;</div>
        </div>
      </div>
    </section>
  );
};

export default KeyboardRow;
