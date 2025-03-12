import React from "react";
import styles from "../../styles/Keyboard.module.css";

const Keyboard = () => {
  return (
    <div className={styles.keyboard}>
      <div className={styles.row}>
        <div className={`${styles.key} ${styles.white}`}>Tab</div>
        <div className={`${styles.key} ${styles.purple}`}>Q</div>
        <div className={`${styles.key} ${styles.green}`}>W</div>
        <div className={`${styles.key} ${styles.red}`}>E</div>
        <div className={`${styles.key} ${styles.blue}`}>R</div>
        <div className={`${styles.key} ${styles.blue}`}>T</div>
        <div className={`${styles.key} ${styles.yellow}`}>Y</div>
        <div className={`${styles.key} ${styles.yellow}`}>U</div>
        <div className={`${styles.key} ${styles.red}`}>I</div>
        <div className={`${styles.key} ${styles.yellow}`}>O</div>
        <div className={`${styles.key} ${styles.green}`}>P</div>
        <div className={`${styles.key} ${styles.green}`}>[</div>
        <div className={`${styles.key} ${styles.green}`}>]</div>
      </div>
      <div className={styles.row}>
        <div
          className={`${styles.key} ${styles.white}`}
          style={{ marginLeft: 60 }}
        >
          Caps
        </div>
        <div className={`${styles.key} ${styles.purple}`}>A</div>
        <div className={`${styles.key} ${styles.green}`}>S</div>
        <div className={`${styles.key} ${styles.red}`}>D</div>
        <div className={`${styles.key} ${styles.blue}`}>F</div>
        <div className={`${styles.key} ${styles.blue}`}>G</div>
        <div className={`${styles.key} ${styles.yellow}`}>H</div>
        <div className={`${styles.key} ${styles.yellow}`}>J</div>
        <div className={`${styles.key} ${styles.red}`}>K</div>
        <div className={`${styles.key} ${styles.yellow}`}>L</div>
        <div className={`${styles.key} ${styles.green}`}>;</div>
        <div className={`${styles.key} ${styles.green}`}>'</div>
        <div className={`${styles.key} ${styles.white}`}>Enter</div>
      </div>
      <div className={styles.row} style={{ marginLeft: 47 }}>
        <div className={`${styles.key} ${styles.white}`}>Shift</div>
        <div className={`${styles.key} ${styles.purple}`}>Z</div>
        <div className={`${styles.key} ${styles.green}`}>X</div>
        <div className={`${styles.key} ${styles.red}`}>C</div>
        <div className={`${styles.key} ${styles.blue}`}>V</div>
        <div className={`${styles.key} ${styles.blue}`}>B</div>
        <div className={`${styles.key} ${styles.yellow}`}>N</div>
        <div className={`${styles.key} ${styles.yellow}`}>M</div>
        <div className={`${styles.key} ${styles.red}`}>,</div>
        <div className={`${styles.key} ${styles.yellow}`}>.</div>
        <div className={`${styles.key} ${styles.green}`}>/</div>
        <div className={`${styles.key} ${styles.white}`}>Shift</div>
      </div>
      <div className={styles.row} style={{ marginLeft: 47 }}>
        <div className={`${styles.key} ${styles.white}`}>Ctrl</div>
        <div className={`${styles.key} ${styles.white}`}>Win</div>
        <div className={`${styles.key} ${styles.white}`}>Alt</div>
        <div
          className={`${styles.key} ${styles.white}`}
          style={{ width: "385px" }}
        >
          Space
        </div>
        <div className={`${styles.key} ${styles.white}`}>Alt</div>
        <div className={`${styles.key} ${styles.white}`}>Fn</div>
        <div className={`${styles.key} ${styles.white}`}>Ctrl</div>
      </div>
    </div>
  );
};

export default Keyboard;
