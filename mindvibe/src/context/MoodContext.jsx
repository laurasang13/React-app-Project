import { analyzeMood } from "./useFetch"
import { createContext } from "react"


export const MoodContext = createContext()

export function MoodProvider({ children }) {

  const [currentMood, setCurrentMood] = useState(null)
  const [loading, setLoading] = useState(false)

  const analyzeUserMood = async (text) => {
    setLoading(true)

    const result = await analyzeMood(text)

    if (result) {
      setCurrentMood(result)
    } else {
      setCurrentMood(null) // fallback para si falla traiga datos mockeados
    }

    setLoading(false)
  }

  return (
    <MoodContext.Provider value={{
      currentMood,
      loading,
      analyzeUserMood
    }}>
      {children}
    </MoodContext.Provider>
  )
}