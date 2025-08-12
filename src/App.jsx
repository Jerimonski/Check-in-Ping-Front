import React from "react"
import GeneralStatusCards from "./components/GeneralStatusCards"
import { CiWarning } from "react-icons/ci"
import { MdOnlinePrediction } from "react-icons/md"
import { ImConnection } from "react-icons/im"

export default function App() {
  return (
    <main className="mx-auto w-[1120px]">
      <section>
        <article className="bg-amber-500 ">
          <h2 className="text-3xl">Estado de red</h2>
          <div className="flex flex-grow justify-between">
            <span className="text-sm">Monitoreo de ip en tiempo real</span>
            <button>Descarga Excel</button>
          </div>
        </article>
        <div className="flex flex-grow justify-between gap-6">
          <GeneralStatusCards
            BorderColor={"border-green-500"}
            TextColor={"text-green-500"}
            Title={"Online"}
            ValueInNetwork={123}
            Icon={<ImConnection size={45} color="LimeGreen" />}
          />
          <GeneralStatusCards
            BorderColor={"border-red-600"}
            TextColor={"text-red-500"}
            Title={"OffLine"}
            ValueInNetwork={123}
            Icon={<CiWarning size={45} color="red" />}
          />
          <GeneralStatusCards
            BorderColor={"border-blue-400"}
            TextColor={"text-blue-500"}
            Title={"total IP's"}
            ValueInNetwork={123}
            Icon={<MdOnlinePrediction size={45} color="DodgerBlue" />}
          />
        </div>
      </section>
    </main>
  )
}
