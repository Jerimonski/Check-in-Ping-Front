import StatusSection from "./components/StatusSection"
import StatusCards from "./components/ui/StatusCards"

export default function App() {
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
      </section>
    </main>
  )
}
