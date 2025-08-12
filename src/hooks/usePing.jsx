import React, { useEffect, useState } from "react"
import { io } from "socket.io-client"
import PingCard from "../components/PingCard"

export default function usePing() {
  const [pingData, setPingData] = useState([])
  const [connectionStatus, setConnectionStatus] = useState("Conectando...")

  useEffect(() => {
    const socket = io("http://localhost:5000")

    socket.on("connect", () => {
      setConnectionStatus("Conectado. Esperando datos...")
    })

    socket.on("ping_response", (data) => {
      console.log("Datos recibidos:", data)
      if (Array.isArray(data)) {
        setPingData(data)
        setConnectionStatus("Datos recibidos.")
      } else {
        console.error("El formato de los datos no es un array:", data)
        setConnectionStatus("Error al recibir datos.")
      }
    })

    socket.on("disconnect", () => {
      setConnectionStatus("Desconectado del servidor.")
      setPingData([])
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Estado de la Conexión
      </h2>
      <p className="text-center text-gray-600 mb-6">{connectionStatus}</p>

      <div className="flex flex-wrap justify-center gap-4">
        {pingData.length > 0 ? (
          pingData.map((device, index) => (
            <PingCard
              key={index}
              name={device.name}
              ip={device.ip}
              isActive={device.is_active}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">
            No hay dispositivos para mostrar.
          </p>
        )}
      </div>
    </div>
  )
}
