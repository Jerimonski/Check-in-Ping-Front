import GeneralStatusCards from "./ui/GeneralStatusCards"
import { CiWarning } from "react-icons/ci"
import { MdOnlinePrediction } from "react-icons/md"
import { ImConnection } from "react-icons/im"

export default function StatusSection() {
  return (
    <div className="flex flex-grow justify-between gap-8 py-10">
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
  )
}
