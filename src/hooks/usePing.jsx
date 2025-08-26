import React, { useEffect, useState } from "react"
import { io } from "socket.io-client"

export default function usePing() {
  const [pingData, setPingData] = useState([])
  const [connectionStatus, setConnectionStatus] = useState("Conectando...")
  const [upCount, setUpCount] = useState(0)
  const [downCount, setDownCount] = useState(0)
  const [lostCount, setLostCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const socket = io("http://localhost:5000")

  useEffect(() => {
    socket.on("connect", () => {
      setConnectionStatus("Conectado. Esperando datos...")
    })

    // el parametro data contiene toda la informacion que recibe
    // del backend, y accede a ellos con el .devices
    socket.on("status_update", (data) => {
      console.log(data)
      if (data && Array.isArray(data.devices)) {
        setPingData(data.devices)
        setConnectionStatus("Datos recibidos.")

        const onlineDevices = data.devices.filter(
          (device) => device.status === "Activo"
        )
        const offlineDevices = data.devices.filter(
          (device) => device.status === "Caido"
        )
        const lostDevices = data.devices.filter(
          (device) => device.active === "Perdido/s"
        )

        setUpCount(onlineDevices.length)
        setDownCount(offlineDevices.length)
        setLostCount(lostDevices.length)
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
      setLostCount(0)
      setTotalCount(0)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return {
    pingData,
    connectionStatus,
    upCount,
    downCount,
    lostCount,
    totalCount,
  }
}
