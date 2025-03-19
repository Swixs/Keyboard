import { levels } from "../../data/levelsData";
import { Link } from "react-router-dom";
import styles from "../../styles/Levels.module.css";

export default function Levels() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choose Your Level</h1>
      <ul className={styles.list}>
        {levels.map((level) => (
          <li key={level.id}>
            <Link to={`/level/${level.id}`} className={styles.levelButton}>
              Level {level.id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
