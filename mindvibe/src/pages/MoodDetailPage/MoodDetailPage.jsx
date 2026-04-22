import { useMoodDetail } from "../../hooks/useMoodDetail"
import styles from "../MoodDetailPage/MoodDetail.module.css"


function MoodDetailPage() {
  const { mood } = useMoodDetail()

  if (!mood) {
    return <p className={styles["notFoundMood"] }>Mood not found</p>
  }

  return (
    <article className={styles["colorMood-container"]}>
      
      <div className={styles["colorMood-card"]}>
        <h1>Details Mood</h1>
        <h3>{mood.name}</h3>
        <p>{mood.description}</p>
        <h3>Recomendaciones:</h3>
        <ul>
          {mood.recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default MoodDetailPage