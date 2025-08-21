import { useState } from "react"
import StatusCards from "./components/StatusCards"
import StatusSection from "./components/StatusSection"
import usePing from "./hooks/usePing"

export default function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const { pingData, connectionStatus } = usePing()
  const filteredDevices = pingData.filter((device) => {
    const lostMatch = filterStatus === "all" || device.active === filterStatus
    const statusMatch = filterStatus === "all" || device.status === filterStatus
    const searchMatch =
      device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.ip.includes(searchTerm)
    return (statusMatch && searchMatch) || (lostMatch && searchMatch)
  })
  return (
    <main className="mx-auto w-[1120px]">
      <section>
        <article className="pt-4">
          <h2 className="text-4xl font-semibold">Estado de red</h2>
          <div className="flex flex-grow justify-between">
            <span className="text-xl text-Secondary-Text">
              Monitoreo de ip en tiempo real
            </span>
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 text-2xl border rounded-2xl border-[#d8d8d8] w-full"
            />
          </div>
          <div className="flex justify-between gap-2 mt-4">
            <button
              onClick={() => setFilterStatus("Activo")}
              className={`py-2 px-4 rounded-xl font-semibold w-1/3 transition-colors ${
                filterStatus === "Activo"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Activos
            </button>
            <button
              onClick={() => setFilterStatus("Caido")}
              className={`py-2 px-4 rounded-xl font-semibold w-1/3 transition-colors ${
                filterStatus === "Caido"
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Inactivos
            </button>
            <button
              onClick={() => setFilterStatus("Perdido/s")}
              className={`py-2 px-4 rounded-xl font-semibold w-1/3 transition-colors ${
                filterStatus === "Perdido/s"
                  ? "bg-yellow-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Perdido/s
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
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Estado de la Conexión
          </h2>
          <p className="text-center text-gray-600 mb-6">{connectionStatus}</p>

          <div className="flex flex-wrap justify-center gap-4">
            {filteredDevices.length > 0 ? (
              filteredDevices.map((device, index) => (
                <StatusCards
                  key={index}
                  status={device.status}
                  name={device.name}
                  ip={device.ip}
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
