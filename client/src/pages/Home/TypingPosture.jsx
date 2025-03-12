import React from "react";
import styles from "../../styles/Home.module.css";

const TypingPosture = () => {
  return (
    <section>
      <h2 className={styles.subtitle}>Typing Posture</h2>
      <ul className={styles.list}>
        <li>• Sit up straight and keep your back straight.</li>
        <li>• Keep your elbows bent at an angle.</li>
        <li>• Your head should be slightly tilted forward.</li>
        <li>• The distance from your eyes to the screen should be 45-70 cm.</li>
        <li>
          • Relax the muscles of your shoulders, arms, and hands. Your hands can
          slightly touch the table at the bottom of the keyboard, but do not
          move it.
        </li>
        <li>
          • Weigh your body on your hands so as not to overstrain your wrist.
        </li>
      </ul>
    </section>
  );
};

export default TypingPosture;
