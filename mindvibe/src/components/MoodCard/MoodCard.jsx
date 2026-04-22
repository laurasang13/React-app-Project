import { moods } from "../Moods";
import styles from "./MoodCard.module.css";
import { Link } from "react-router-dom"


function MoodCard({ mood }) {
  return (
    <Link to={`/mood/${mood.id}`} className={styles["link"]}>
      <div className={styles["mood-card"]}>
        <img src={mood.image} alt={mood.name} />
        <h3>{mood.name}</h3>
      </div>
    </Link>
  );
}

export default MoodCard;