import React from "react";
import styles from "../../styles/Home.module.css";
import working from "../../images/Home/working.png";

const HeroSection = () => {
  return (
    <section>
      <h1 className={styles.title}>Learn how to touch type</h1>
      <p className={styles.text} style={{ marginBottom: 50 }}>
        The main idea of ​​touch typing is that each finger has its own zone of
        keys. This allows you to type without looking at the keyboard. Practice
        regularly and, thanks to muscle memory, all ten of your fingers will
        know where to press.
      </p>
      <img src={working} alt="Typing Posture" className={styles.image} />
    </section>
  );
};

export default HeroSection;
