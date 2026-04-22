import { useMoodDetail } from "../../hooks/useMoodDetail"
import styles from "../MoodDetailPage/MoodDetail.module.css"
import { analyzeMood } from "../../context/useFetch"
import { useContext } from "react"
import { MoodContext } from "../../context/MoodContext"

/*function MoodDetailPage() {
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

const { currentMood, loading } = useContext(MoodContext)

if (loading) return <p>Traduciendo tus emociones...</p>

return <div>{currentMood?.description}</div>

export default <MoodDetailPage></MoodDetailPage>*/

function MoodDetailPage() {

  const { mood, loading } = useMoodDetail()
 
  if (loading) {
    return <p>Analysing your feelings...</p>
  }

  if (!mood) {
    return <p className={styles["notFoundMood"]}>Mood not found</p>
  }

  return (
    <article className={styles["colorMood-container"]}>
      <div className={styles["colorMood-card"]}>
        <h1>Details Mood</h1>
        <h3>{mood.name}</h3>
        <p>{mood.description}</p>

        <h3>Recomendaciones</h3>
        <ul>
          {mood.recommendations?.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>

        {mood.quote && <p>{mood.quote}</p>}
      </div>
    </article>
  )
}

export default MoodDetailPage