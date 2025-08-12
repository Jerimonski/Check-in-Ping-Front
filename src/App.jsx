import PingCard from "./components/PingCard"
import StatusSection from "./components/StatusSection"
import StatusCards from "./components/ui/StatusCards"
import React, { useEffect, useState } from "react"
import { io } from "socket.io-client"

export default function App() {
  const [pingData, setPingData] = useState([])
  const [connectionStatus, setConnectionStatus] = useState("Conectando...")

  useEffect(() => {
    const socket = io("http://127.0.0.1:5000")

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
    <main className="mx-auto w-[1120px]">
      <section className="">
        <article className="pt-4">
          <h2 className="text-4xl font-semibold">Estado de red</h2>
          <div className="flex flex-grow justify-between">
            <span className="text-xl text-Secondary-Text">
              Monitoreo de ip en tiempo real
            </span>
            <button className="py-2 px-4 cursor-pointer rounded-xl text-white font-semibold bg-[#108568]">
              Descarga Excel
            </button>
          </div>
        </article>
        <StatusSection />
      </section>
      <section>
        <div className="py-6 px-6 space-y-4 border rounded-2xl border-[#d8d8d8]">
          <h2 className="text-xl font-semibold">Busca una direccion IP</h2>
          <div className="flex justify-between gap-8">
            <input
              type="text"
              placeholder="10.30.10.1"
              className="px-4 border rounded-2xl border-[#d8d8d8] w-full"
            />

            <button className="py-2 px-6 cursor-pointer rounded-xl text-white font-semibold bg-[#108568]">
              Buscar
            </button>
          </div>
        </div>
        <div className="flex-wrap">
          <StatusCards></StatusCards>
        </div>
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
      </section>
    </main>
  )
}
