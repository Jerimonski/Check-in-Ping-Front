import GeneralStatusCards from "./ui/GeneralStatusCards"
import { CiWarning } from "react-icons/ci"
import { MdOnlinePrediction } from "react-icons/md"
import { ImConnection } from "react-icons/im"
import { MdSignalWifiStatusbarNotConnected } from "react-icons/md"

export default function StatusSection({ Activos, Caidos, Total }) {
  return (
    <div className="flex flex-grow justify-between gap-8 py-10">
      <GeneralStatusCards
        BorderColor={"border-green-500"}
        TextColor={"text-green-500"}
        Title={"Online"}
        ValueInNetwork={Activos}
        Icon={<ImConnection size={45} color="LimeGreen" />}
      />
      <GeneralStatusCards
        BorderColor={"border-red-600"}
        TextColor={"text-red-500"}
        Title={"OffLine"}
        ValueInNetwork={Caidos}
        Icon={<CiWarning size={45} color="red" />}
      />
      <GeneralStatusCards
        BorderColor={"border-blue-400"}
        TextColor={"text-blue-500"}
        Title={"total IP's"}
        ValueInNetwork={Total}
        Icon={<MdOnlinePrediction size={45} color="DodgerBlue" />}
      />
    </div>
  )
}
