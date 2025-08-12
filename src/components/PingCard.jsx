function PingCard({ name, ip, isActive }) {
  const cardClasses = `p-4 m-2 rounded-lg shadow-md transition-shadow duration-300 ease-in-out ${
    isActive
      ? "border-green-500 hover:shadow-lg"
      : "border-red-500 hover:shadow-lg"
  } bg-white border`

  const statusClasses = `font-bold ${
    isActive ? "text-green-600" : "text-red-600"
  }`

  return (
    <div className={cardClasses}>
      <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
      <p className="mt-2 text-gray-600">
        <strong className="font-medium">IP:</strong> {ip}
      </p>
      <p className="mt-1">
        <strong className="font-medium">Estado:</strong>{" "}
        <span className={statusClasses}>
          {isActive ? "Activo" : "Inactivo"}
        </span>
      </p>
    </div>
  )
}

export default PingCard
