import { useState } from "react"
import { FaEdit } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"
import { RxCross2 } from "react-icons/rx"
import useDelete from "../hooks/useDelete"
import usePatch from "../hooks/usePatch"

export default function StatusCard({ name, ip, localizacion, status }) {
  const [confirmation, setConfirmation] = useState(false)
  const [editForm, setEditForm] = useState(false)
  const [newDevice, setNewDevice] = useState({
    nombre: "",
    ip: "",
    localizacion: "",
  })
  const { deleteRequest } = useDelete()
  const { makeUpdate, updateDevice } = usePatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewDevice({
      ...newDevice,
      [name]: value,
    })
  }
  const cardClasses =
    "px-4 w-64 h-48 flex flex-col justify-center text-center place-items-center shadow-2xl rounded-2xl border-l-6"

  const handleDelete = async () => {
    await deleteRequest(ip)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await makeUpdate(ip, newDevice)
    setNewDevice({ nombre: "", ip: "", localizacion: "" })
    setEditForm(!editForm)
  }

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
        {editForm === false ? (
          <button
            onClick={() => setEditForm(!editForm)}
            className="cursor-pointer p-1"
          >
            <FaEdit size={25} color="gray" />
          </button>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-2 absolute z-50 bg-white text-black w-64 h-max flex flex-col shadow-2xl rounded-2xl"
          >
            <div className="flex justify-end">
              <button
                className="p-2 hover:text-white cursor-pointer w-max rounded-lg duration-300 hover:bg-black"
                onClick={() => setEditForm(!editForm)}
              >
                <RxCross2 size={20} />
              </button>
            </div>
            <div className="flex flex-col px-4 space-y-2">
              <label>Nuevo nombre</label>
              <input
                className="border rounded-lg py-1 px-2"
                type="text"
                name="nombre"
                value={updateDevice.nombre}
                onChange={handleChange}
              />
              <label>Nueva ip</label>
              <input
                className="border rounded-lg p-1 px-2"
                type="text"
                name="ip"
                value={updateDevice.ip}
                onChange={handleChange}
              />
              <label>Nueva Direccion</label>
              <input
                className="border rounded-lg p-1 px-2"
                type="text"
                name="localizacion"
                value={updateDevice.localizacion}
                onChange={handleChange}
              />
            </div>
            <button
              className="cursor-pointer hover:text-white hover:bg-black duration-300 my-2 p-2 border w-max mx-auto rounded-lg"
              type="submit"
            >
              Actualizar
            </button>
          </form>
        )}
        {confirmation === false ? (
          <button
            onClick={() => setConfirmation(!confirmation)}
            className="cursor-pointer p-1"
          >
            <MdDeleteForever size={25} color="red" />
          </button>
        ) : (
          <div className="space-x-1">
            <button
              className="text-red-600 cursor-pointer rounded-lg duration-300 px-2 hover:text-white hover:bg-red-600"
              onClick={() => setConfirmation(!confirmation)}
            >
              cancelar
            </button>
            <button
              className="cursor-pointer text-green-600 hover:bg-green-600 hover:text-white rounded-lg px-2 duration-300"
              onClick={handleDelete}
            >
              Confirmar
            </button>
          </div>
        )}
      </div>
      <h4 className="text-xl font-semibold text-[#062913]">{name}</h4>
      <p className="mt-2 text-lg text-gray-600">
        <strong className="font-light">IP:</strong> {ip}
      </p>
      <p className="mt-1 flex flex-col">
        <span className={`text-xl text-center mx-auto w-36 rounded-4xl`}>
          {status}
        </span>
        <cite className="text-black">{localizacion}</cite>
      </p>
    </div>
  )
}
