import { FaEdit } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"

export default function StatusCard({ name, ip, status }) {
  const cardClasses =
    "px-4 w-64 h-38 flex flex-col justify-center text-center place-items-center shadow-2xl rounded-2xl border-l-6"

  let statusClasses = "font-bold py-2"
  if (status == "Activo") {
    statusClasses = "font-bold py-2 border-green-500 text-green-500"
  } else if (status == "Caido") {
    statusClasses = "font-bold border-red-500 text-red-500"
  } else {
    statusClasses = "font-bold border-yellow-400 text-yellow-700"
  }

  return (
    <div className={`${cardClasses} ${statusClasses}`}>
      <div className="flex justify-between w-full">
        <button className="cursor-pointer p-1">
          <FaEdit size={25} color="gray" />
        </button>
        <button className="cursor-pointer p-1">
          <MdDeleteForever size={25} color="red" />
        </button>
      </div>
      <h4 className="text-xl font-semibold text-[#062913]">{name}</h4>
      <p className="mt-2 text-lg text-gray-600">
        <strong className="font-light">IP:</strong> {ip}
      </p>
      <p className="mt-1">
        <span className={`text-xl text-center w-36 rounded-4xl`}>{status}</span>
      </p>
    </div>
  )
}
