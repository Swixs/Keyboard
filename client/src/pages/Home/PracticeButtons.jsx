import React from "react";
import styles from "../../styles/Home.module.css";

const PracticeButtons = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={`${styles.button} ${styles.blueButton}`}>
        Take the Test
      </button>
      <button className={`${styles.button} ${styles.blackButton}`}>
        Start Learning
      </button>
    </div>
  );
};

export default PracticeButtons;
