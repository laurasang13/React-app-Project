import MoodCard from "../../components/MoodCard/MoodCard";
import { moods } from "../../components/Moods";
import styles from "./FeelingPage.module.css";

function FeelingPage() {
  return (
    <div className="feeling-page">
        <h2>How do you feel today?</h2>
        <div className={styles["moods-container"]}> 
            {moods.map((mood) => (
                <MoodCard key={mood.name} mood={mood}/>
            ))}
        </div>
    </div>

  )
}

export default FeelingPage;