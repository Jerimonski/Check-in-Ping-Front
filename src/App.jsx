import React, { useEffect, useState } from "react"
import { io } from "socket.io-client"
import StatusCards from "./components/StatusCards"
import StatusSection from "./components/StatusSection"

export default function App() {
  const [pingData, setPingData] = useState([])
  const [connectionStatus, setConnectionStatus] = useState("Conectando...")
  const [upCount, setUpCount] = useState(0)
  const [downCount, setDownCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  useEffect(() => {
    const socket = io("http://127.0.0.1:5000")

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
        console.error("El formato de los datos no es un array:", data)
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

  const filteredDevices = pingData.filter((device) => {
    const statusMatch = filterStatus === "all" || device.status === filterStatus
    const searchMatch =
      device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.ip.includes(searchTerm)
    return statusMatch && searchMatch
  })

  return (
    <main className='mx-auto w-[1120px]'>
      <section className=''>
        <article className='pt-4'>
          <h2 className='text-4xl font-semibold'>Estado de red</h2>
          <div className='flex flex-grow justify-between'>
            <span className='text-xl text-Secondary-Text'>
              Monitoreo de ip en tiempo real
            </span>
            <button className='py-2 px-4 cursor-pointer rounded-xl text-white font-semibold bg-[#108568]'>
              Descarga Excel
            </button>
          </div>
        </article>
        <StatusSection
          Activos={upCount}
          Caidos={downCount}
          Total={totalCount}
        />
      </section>
      <section>
        <div className='py-6 px-6 space-y-4 border rounded-2xl border-[#d8d8d8]'>
          <h2 className='text-xl font-semibold'>Busca una direccion IP</h2>
          <div className='flex justify-between gap-8'>
            <input
              type='text'
              placeholder='10.30.10.1'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='px-4 border rounded-2xl border-[#d8d8d8] w-full'
            />
            <button className='py-2 px-6 cursor-pointer rounded-xl text-white font-semibold bg-[#108568]'>
              Buscar
            </button>
          </div>
          <div className='flex justify-between gap-2 mt-4'>
            <button
              onClick={() => setFilterStatus("UP")}
              className={`py-2 px-4 rounded-xl font-semibold w-1/3 transition-colors ${
                filterStatus === "UP"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Activos
            </button>
            <button
              onClick={() => setFilterStatus("DOWN")}
              className={`py-2 px-4 rounded-xl font-semibold w-1/3 transition-colors ${
                filterStatus === "DOWN"
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Inactivos
            </button>
            <button
              onClick={() => setFilterStatus("all")}
              className={`py-2 px-4 rounded-xl font-semibold w-1/3 transition-colors ${
                filterStatus === "all"
                  ? "bg-[#108568] text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Todos
            </button>
          </div>
        </div>
        <div className='container mx-auto p-4'>
          <h2 className='text-2xl font-bold mb-4 text-center text-gray-800'>
            Estado de la Conexión
          </h2>
          <p className='text-center text-gray-600 mb-6'>{connectionStatus}</p>

          <div className='flex flex-wrap justify-center gap-4'>
            {filteredDevices.length > 0 ? (
              filteredDevices.map((device, index) => (
                <StatusCards
                  key={index}
                  name={device.name}
                  ip={device.ip}
                  isActive={device.status === "UP"}
                />
              ))
            ) : (
              <p className='text-center text-gray-500'>
                No hay dispositivos para mostrar.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
