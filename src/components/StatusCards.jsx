export default function StatusCard({ name, ip, status }) {
  const cardClasses =
    "px-4 h-48 w-64 flex flex-col justify-center text-center place-items-center shadow-2xl rounded-2xl border-l-6"

  let statusClasses = "font-bold py-2"
  if (status == "Activo") {
    statusClasses = "font-bold py-2 border-green-500 text-green-500"
  } else if (status == "Caido") {
    statusClasses = "border-red-500 text-red-500"
  } else {
    statusClasses = "border-yellow-400 text-yellow-700"
  }

  return (
    <div className={`${cardClasses} ${statusClasses}`}>
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
