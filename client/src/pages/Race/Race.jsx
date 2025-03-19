import { useState, useEffect, useRef } from "react";
import sentences from "../../data/sentences.json";
import styles from "../../styles/Race.module.css";
import StaticKeyboard from "../../components/Keyboard/staticKeyboard";

const Race = () => {
  const [sentence, setSentence] = useState("");
  const [inputText, setInputText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [completedSentences, setCompletedSentences] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const inputRef = useRef(null);

  const getRandomSentence = () => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
  };

  useEffect(() => {
    if (gameStarted) {
      setSentence(getRandomSentence());
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            setIsTimeUp(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameStarted]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [sentence]);

  const handleInputChange = (e) => {
    if (isTimeUp) return;

    const value = e.target.value;
    if (value[value.length - 1] === sentence[currentIndex]) {
      setInputText(value);
      setCurrentIndex(currentIndex + 1);

      if (currentIndex === sentence.length - 1) {
        setSentence(getRandomSentence());
        setInputText("");
        setCurrentIndex(0);
        setTimeLeft((prev) => prev + 10);
        setCompletedSentences((prev) => prev + 1);
      }
    }
  };

  const handleRestart = () => {
    setSentence(getRandomSentence());
    setInputText("");
    setCurrentIndex(0);
    setTimeLeft(45);
    setIsTimeUp(false);
    setCompletedSentences(0);
  };

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <div
      className={`${styles.container} ${
        gameStarted ? "" : styles.blackBackground
      }`}
      onClick={handleFocus}
    >
      {!gameStarted ? (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Game Rules</h2>
            <p>
              You have 45 seconds to type as much text as possible.
              <br />
              Each completed sentence adds 10 seconds to the timer.
              <br />
              Use our keyboard for hints. Good luck!
            </p>
            <button onClick={handleStartGame} className={styles.startButton}>
              Let's Go!
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.title}>Typing Race</div>
          <div className={styles.timer}>
            Time Left: <span style={{ color: "red" }}>{timeLeft}</span>s
          </div>
          <div className={styles.completed}>
            Completed Sentences: {completedSentences}{" "}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              className={styles.inputHidden}
              disabled={isTimeUp}
              placeholder="Start typing..."
              ref={inputRef}
            />
            <div className={styles.text}>
              {sentence.split("").map((char, index) => (
                <span
                  key={index}
                  className={
                    index < currentIndex
                      ? styles.correct
                      : index === currentIndex
                      ? styles.current
                      : styles.incorrect
                  }
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
          <StaticKeyboard />
          {isTimeUp && (
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <h2>Time's up!</h2>
                <button onClick={handleRestart} className={styles.resetButton}>
                  Restart
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Race;
