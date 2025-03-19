import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { levels } from "../../data/levelsData";
import styles from "../../styles/Level.module.css";
import Keyboard from "../../components/Keyboard/keyboard";

export default function Level() {
  const { levelId } = useParams();
  const [input, setInput] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const inputRef = useRef(null);

  const level = levels.find((level) => level.id === parseInt(levelId));
  const letters = level?.letters[0] || "";

  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (input.length === letters.length) {
      setModalVisible(true);
    }
  }, [input, letters.length]);

  const handleInput = (e) => {
    const value = e.target.value;

    if (
      value.length <= letters.length &&
      letters[value.length - 1] === value[value.length - 1]
    ) {
      setInput(value);
    }
  };

  const handleNextLevel = () => {
    const nextLevelId = parseInt(levelId) + 1;
    if (levels.some((level) => level.id === nextLevelId)) {
      navigate(`/level/${nextLevelId}`);
      setModalVisible(false);
      setInput("");
      window.location.reload();
    }
  };

  const handleReturnToMenu = () => {
    navigate("/levels");
  };

  const activeKey = letters[input.length] || "";

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>Typing Speed Test</h1>
        <p className={styles.letters}>
          {letters.split("").map((char, index) => {
            let color = "";
            if (index < input.length) {
              color = input[index] === char ? styles.correct : styles.wrong;
            }
            return (
              <span
                key={index}
                className={`${color} ${
                  index === input.length ? styles.current : ""
                }`}
              >
                {char}
              </span>
            );
          })}
        </p>
        <input
          ref={inputRef}
          className={`${styles.input} ${styles.hiddenInput}`}
          value={input}
          onChange={handleInput}
        />
      </div>

      <Keyboard activeKey={activeKey} />

      {isModalVisible && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Congratulations!</h2>
            <p>You have successfully completed this level.</p>
            <div className={styles.modalButtons}>
              <button onClick={handleReturnToMenu}>Return to Menu</button>
              <button onClick={handleNextLevel}>Next Level</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
