import { moods } from "../Moods";
import styles from "./MoodCard.module.css";

function MoodCard({ mood }) {
  return (
    <div className={styles["mood-card"]}>
      <img src={mood.image} alt={mood.name} />
      <h3>{mood.name}</h3>
    </div>
  );
}

export default MoodCard;