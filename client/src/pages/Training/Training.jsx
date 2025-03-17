import { useState, useEffect, useRef } from "react";
import styles from "../../styles/Training.module.css";
import texts from "../../../src/data/text.json";

export default function Training() {
  const [text, setText] = useState(
    texts[Math.floor(Math.random() * texts.length)]
  );
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [started, setStarted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (started && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [started, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      setCharCount(input.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  const handleInput = (e) => {
    const value = e.target.value;
    if (
      value.length <= text.length &&
      value[value.length - 1] === text[value.length - 1]
    ) {
      setInput(value);
      if (!started) {
        setStarted(true);
      }
    }
  };

  const startGame = () => {
    setInput("");
    setTimeLeft(60);
    setStarted(true);
    setCharCount(0);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const restartGame = () => {
    setText(texts[Math.floor(Math.random() * texts.length)]);
    setInput("");
    setTimeLeft(60);
    setStarted(false);
    setCharCount(0);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>Typing Speed Test</h1>
        <p className={styles.text}>
          {text.split("").map((char, index) => {
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
        {timeLeft > 0 ? (
          <>
            <input
              ref={inputRef}
              className={styles.input}
              value={input}
              onChange={handleInput}
              disabled={timeLeft === 0}
              style={{ opacity: "0" }}
            />
            <p className={styles.time}>Time Left: {timeLeft}s</p>
          </>
        ) : (
          <p className={styles.time}>Characters per minute: {charCount}</p>
        )}
        {!started ? (
          <button onClick={startGame} className={styles.button}>
            Start
          </button>
        ) : (
          <button onClick={restartGame} className={styles.button}>
            Restart
          </button>
        )}
      </div>
    </div>
  );
}
