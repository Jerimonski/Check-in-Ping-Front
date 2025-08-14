import React, { useEffect, useState } from "react"
import { io } from "socket.io-client"

export default function usePing() {
  const [pingData, setPingData] = useState([])
  const [connectionStatus, setConnectionStatus] = useState("Conectando...")
  const [upCount, setUpCount] = useState(0)
  const [downCount, setDownCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const socket = io("http://127.0.0.1:5000")

  useEffect(() => {
    socket.on("connect", () => {
      setConnectionStatus("Conectado. Esperando datos...")
    })

    socket.on("status_update", (data) => {
      console.log("Datos recibidos:", data)
      if (data && Array.isArray(data.devices)) {
        setPingData(data.devices)
        setConnectionStatus("Datos recibidos.")

        const onlineDevices = data.devices.filter(
          (device) => device.status === "UP"
        )
        const offlineDevices = data.devices.filter(
          (device) => device.status === "DOWN"
        )

        setUpCount(onlineDevices.length)
        setDownCount(offlineDevices.length)
        setTotalCount(data.devices.length)
      } else {
        setConnectionStatus("Error al recibir datos.")
      }
    })

    socket.on("disconnect", () => {
      setConnectionStatus("Desconectado del servidor.")
      setPingData([])
      setUpCount(0)
      setDownCount(0)
      setTotalCount(0)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return { pingData, connectionStatus, upCount, downCount, totalCount }
}
