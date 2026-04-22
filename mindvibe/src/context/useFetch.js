import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY
})

export async function analyzeMood(text) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: `
Devuelve EXCLUSIVAMENTE un JSON válido.
Sin texto adicional, sin markdown.

Formato:
{
  "description": "...",
  "recommendations": ["...", "...", "..."],
  "color": "#XXXXXX",
  "quote": "..."
}

Texto:
"${text}"
`
    })

    let rawText = response.text

    // 🧹 limpieza
    rawText = rawText
      .replace(/```json|```/g, "")
      .replace(/^[^\{]*\{/, "{")
      .replace(/\}[^\}]*$/, "}")
      .trim()

    try {
      return JSON.parse(rawText)
    } catch (e) {
      console.error("❌ Error parseando:", rawText)
      return null
    }

  } catch (error) {
    console.error("🔥 Error con Gemini:", error)
    return null
  }
}