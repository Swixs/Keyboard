import React from "react";
import styles from "../../styles/Keyboard.module.css";

const Keyboard = ({ activeKey }) => {
  const renderKey = (key, color, width) => {
    const isActive = activeKey.toUpperCase() === key;
    return (
      <div
        className={`${styles.key} ${styles[color]} ${
          isActive ? styles.active : ""
        }`}
        style={{ width }}
      >
        {key}
      </div>
    );
  };

  return (
    <div className={styles.keyboard}>
      <div className={styles.row}>
        {renderKey("Tab", "white")}
        {renderKey("Q", "purple")}
        {renderKey("W", "green")}
        {renderKey("E", "red")}
        {renderKey("R", "blue")}
        {renderKey("T", "blue")}
        {renderKey("Y", "yellow")}
        {renderKey("U", "yellow")}
        {renderKey("I", "red")}
        {renderKey("O", "yellow")}
        {renderKey("P", "green")}
        {renderKey("[", "green")}
        {renderKey("]", "green")}
        {renderKey("\\", "white", "35px")}
      </div>

      <div className={styles.row}>
        {renderKey("Caps", "white")}
        {renderKey("A", "purple")}
        {renderKey("S", "green")}
        {renderKey("D", "red")}
        {renderKey("F", "blue")}
        {renderKey("G", "blue")}
        {renderKey("H", "yellow")}
        {renderKey("J", "yellow")}
        {renderKey("K", "red")}
        {renderKey("L", "yellow")}
        {renderKey(";", "green")}
        {renderKey("'", "green")}
        {renderKey("Enter", "white")}
      </div>

      <div className={styles.row}>
        {renderKey("Shift", "white")}
        {renderKey("Z", "purple")}
        {renderKey("X", "green")}
        {renderKey("C", "red")}
        {renderKey("V", "blue")}
        {renderKey("B", "blue")}
        {renderKey("N", "yellow")}
        {renderKey("M", "yellow")}
        {renderKey(",", "red")}
        {renderKey(".", "yellow")}
        {renderKey("/", "green")}
        {renderKey("Shift", "white")}
      </div>

      <div className={styles.row}>
        {renderKey("Ctrl", "white")}
        {renderKey("Win", "white")}
        {renderKey("Alt", "white")}
        {renderKey("Space", "white", "385px")}
        {renderKey("Alt", "white")}
        {renderKey("Fn", "white")}
        {renderKey("Ctrl", "white")}
      </div>
    </div>
  );
};

export default Keyboard;
