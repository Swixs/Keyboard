import React from "react";
import styles from "../../styles/Home.module.css";

import funCat from "../../images/FunCat.jpg";
import HeroSection from "./HeroSection";
import TypingPosture from "./TypingPosture";
import TypingSpeed from "./TypingSpeed";
import FingerMovement from "./FingerMovement";
import PracticeButtons from "./PracticeButtons";
import FAQSection from "./FAQSection";
import KeyboardRow from "./KeyboardRow";
import StaticKeyboard from "../../components/Keyboard/staticKeyboard";

const Home = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <TypingPosture />
      <KeyboardRow />
      <p className={styles.text} style={{ marginTop: 100 }}>
        Bend your fingers slightly and place them on the{" "}
        <span className={styles.keyBorder}>F</span>{" "}
        <span className={styles.keyBorder}>A</span>{" "}
        <span className={styles.keyBorder}>S</span>{" "}
        <span className={styles.keyBorder}>D</span> and{" "}
        <span className={styles.keyBorder}>J</span>{" "}
        <span className={styles.keyBorder}>K</span>{" "}
        <span className={styles.keyBorder}>L</span>{" "}
        <span className={styles.keyBorder}>;</span> keys, which are in the
        middle row. This row is called the <strong>MAIN ROW</strong>, because
        you will always start with these keys and return to them.
      </p>
      <p className={styles.text}>
        On the <span className={styles.keyBorder}>F</span> and{" "}
        <span className={styles.keyBorder}>J</span> keys, under the index
        fingers, there are small protrusions. They allow you to navigate the
        keyboard blindly.
      </p>

      <StaticKeyboard />
      <h2 className={styles.text} style={{ marginTop: 100 }}>
        The color of the keys on this keyboard will help you understand and
        remember which finger to press which key.
      </h2>

      <ul className={styles.list}>
        <li>
          • Press the keys only with the finger that is intended for them.
        </li>
        <li>
          • Always return your fingers to the original position "
          <span className={styles.keyBorder}>F</span>{" "}
          <span className={styles.keyBorder}>D</span>{" "}
          <span className={styles.keyBorder}>S</span>{" "}
          <span className={styles.keyBorder}>A</span> -{" "}
          <span className={styles.keyBorder}>J</span>{" "}
          <span className={styles.keyBorder}>K</span>{" "}
          <span className={styles.keyBorder}>L</span>{" "}
          <span className={styles.keyBorder}>;</span>".
        </li>
        <li>
          • Establish a rhythm and keep it while typing. Press the keys at the
          same interval.
        </li>
        <li>• When typing, imagine the layout of the keys.</li>
        <li>
          • Always press the <span className={styles.keyBorder}>SHIFT</span> key
          with the little finger on the opposite side from the desired letter.
        </li>
        <li>
          • Press the space bar with the thumb of your left or right hand,
          whichever is more comfortable for you.
        </li>
      </ul>

      <p className={styles.centeredText}>
        At first, this method of typing may seem inconvenient. But don't stop.
        Over time, everything will be fast, easy and convenient. To achieve
        maximum results, choose a touch typing course for your keyboard layout
        and in the desired language.
      </p>
      <img
        src={funCat}
        alt="Fun_Picture"
        className={styles.image}
        style={{ border: "1px solid black", borderRadius: 10 }}
      />
      <FingerMovement />
      <TypingSpeed />
      <h1>It's time to practice</h1>
      <PracticeButtons />
      <FAQSection />
    </div>
  );
};

export default Home;
