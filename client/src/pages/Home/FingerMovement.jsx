import React from "react";
import styles from "../../styles/Home.module.css";

const FingerMovement = () => {
  return (
    <section>
      <h2 className={styles.subtitle}>Finger Movement</h2>
      <p className={styles.textLeft}>
        Don't look at the keyboard while you type. Just slide your fingers over
        the keys until you find the home row.
      </p>
      <p className={styles.textLeft}>
        Limit your hand and finger movements to the minimum required to press
        the necessary keys. Keep your hands and fingers as close to their
        original position as possible. This will increase your typing speed and
        reduce the strain on your hands.
      </p>
      <p className={styles.textLeft}>
        Watch your ring and little fingers, as they are often left unused.
      </p>
    </section>
  );
};

export default FingerMovement;
