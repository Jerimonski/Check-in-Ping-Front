import axios from "axios"
import { useState, useCallback } from "react"

export default function usePatch() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [updateDevice, setUpdateDevice] = useState({})

  const makeUpdate = useCallback(async (ipDevice, updateDevice) => {
    if (isSubmitting || updateDevice === false) {
      return
    }
    setIsSubmitting(true)

    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_PORTS}/${ipDevice}`,
        updateDevice
      )
      setUpdateDevice(response.data)
      setIsSubmitting(false)
    } catch (e) {
      console.error("Error al crear deporte:", e)
      setIsSubmitting(false)
    }
  }, [])

  return { makeUpdate, updateDevice }
}
