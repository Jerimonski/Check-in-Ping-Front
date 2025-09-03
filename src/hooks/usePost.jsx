import axios from "axios"
import { useState, useCallback } from "react"

export default function usePost() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [newDevice, setNewDevice] = useState({})

  const makeRequest = useCallback(async (requestData) => {
    if (isSubmitting || requestData === false) {
      return
    }
    setIsSubmitting(true)

    try {
      const response = await axios.post(
        import.meta.env.VITE_API_POST,
        requestData
      )
      setNewDevice(response.data)
      setIsSubmitting(false)
    } catch (error) {
      console.error("Error al crear deporte:", error)
      setIsSubmitting(false)
    }
  }, [])

  return { makeRequest, newDevice }
}
