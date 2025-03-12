import React from "react";
import styles from "../../styles/Home.module.css";

const TypingSpeed = () => {
  return (
    <section>
      <h2 className={styles.subtitle}>Print speed</h2>
      <ul className={styles.list}>
        <li>
          • Don't try to type at lightning speed right away. Start speeding up
          only when all ten fingers get used to pressing the correct keys.
        </li>
        <li>
          • Take your time when typing to avoid mistakes. Speed will gradually
          increase.
        </li>
        <li>• Always look one or two words ahead in the text.</li>
        <li>
          • If you have trouble typing, use a keyboard check to determine
          whether it's a software or hardware issue.
        </li>
        <li>
          • Complete all the lessons on the Ratatype typing trainer. Your speed
          will become higher than the average typing speed.
        </li>
      </ul>
    </section>
  );
};

export default TypingSpeed;
