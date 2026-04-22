import { useParams } from "react-router-dom"
import { moods } from "../components/Moods"
//import MoodDetailPage from "../pages/MoodDetailPage/MoodDetailPage"


export function useMoodDetail() {
  
  const { slug } = useParams()
  const moodInfo = moods.find(m => m.id === Number(slug))

  const moodData = {
    1: {
      description: "Estás en un estado de tranquilidad y equilibrio emocional.",
      recommendations: [
        "Escuchar música relajante",
        "Dar un paseo",
        "Practicar respiración consciente"
      ],
      image: "/placeholder.png"
    },
    2: {
      name: "Melancolía",
      description: "Un estado introspectivo con cierta tristeza suave.",
      recommendations: [
        "Escribir lo que sientes",
        "Ver una película reconfortante",
        "Hablar con alguien cercano"
      ],
      image: "/placeholder.png"
    
    },
    3: {
      description: "Energía intensa que busca salida. Puede haber irritación o tensión acumulada.",
      recommendations: [
        "Hacer ejercicio físico para liberar tensión",
        "Respirar profundo antes de reaccionar",
        "Alejarte un momento de la situación"
      ],
      image: "/placeholder.png"
    },
    4: {
      description: "Sensación de bloqueo o impotencia. Algo no está saliendo como esperabas.",
      recommendations: [
        "Dividir el problema en partes pequeñas",
        "Tomarte un descanso breve",
        "Cambiar de enfoque o estrategia"
      ],
      image: "/placeholder.png"
    },
    5: {
      description: "Falta de energía o motivación. Todo parece costar un poco más.",
      recommendations: [
        "Hacer una tarea pequeña y sencilla",
        "Escuchar música que te active",
        "Salir a tomar aire y moverte un poco"
      ],
      image: "/placeholder.png"
    },
    6: {
      description: "Estado positivo y ligero. Hay bienestar y apertura.",
      recommendations: [
        "Compartir tu energía con alguien",
        "Aprovechar para hacer algo que te guste",
        "Practicar gratitud"
      ],
      image: "/placeholder.png"
    },
    7: {
      description: "Alta energía y entusiasmo. Sensación de expansión y motivación.",
      recommendations: [
        "Canalizar la energía en algo creativo",
        "Mover el cuerpo (baile, deporte)",
        "Evitar decisiones impulsivas"
      ],
      image: "/placeholder.png"
    },
    8: {
      description: "Tristeza más profunda. Puede haber necesidad de recogimiento y cuidado.",
      recommendations: [
        "Permitirte sentir sin juzgarte",
        "Hablar con alguien de confianza",
        "Descansar y bajar el ritmo"
      ],
      image: "/placeholder.png"
    }, 
  }

   const moodDetail = moodData[moodInfo?.id]
   const mood = moodInfo && moodDetail
    ? { ...moodInfo, ...moodDetail }
    : null

  
  return {
    mood
  }
}