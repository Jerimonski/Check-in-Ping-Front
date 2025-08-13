export default function StatusCard({ name, ip, isActive }) {
  const cardClasses = `px-4 h-48 w-64 flex flex-col justify-center text-center place-items-center shadow-2xl rounded-2xl border-l-6 ${
    isActive ? "border-l-Green-Light" : "border-l-red-600"
  }`

  const statusClasses = `font-bold ${
    isActive ? "text-green-600" : "text-red-600"
  }`

  return (
    <div className={`${cardClasses}`}>
      <h4 className="text-xl font-semibold">{name}</h4>
      <p className="mt-2 text-lg text-gray-600">
        <strong className="font-light">IP:</strong> {ip}
      </p>
      <p className="mt-1">
        <span
          className={`text-xl text-center font-semibold w-36 rounded-4xl text-[#062913] ${statusClasses}`}
        >
          {isActive ? "Activo" : "Inactivo"}
        </span>
      </p>
    </div>
  )
}
