import axios from "axios"
import { useState } from "react"
import { FaEdit } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"
import { RxCross2 } from "react-icons/rx"

export default function StatusCard({ name, ip, status }) {
  const [confirmation, setConfirmation] = useState(false)
  const [editForm, setEditForm] = useState(false)
  const [newDevice, setNewDevice] = useState({ nombre: "", ip: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewDevice({
      ...newDevice,
      [name]: value,
    })
  }
  const cardClasses =
    "px-4 w-64 h-38 flex flex-col justify-center text-center place-items-center shadow-2xl rounded-2xl border-l-6"

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/devices/${name}`)
    } catch (e) {
      console.error("error al eliminar dispositivo:", e)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isSubmitting) {
      return
    }
    setIsSubmitting(true)

    try {
      await axios.patch(`http://localhost:5000/devices/${name}`, newDevice)
      setNewDevice({ nombre: "", ip: "" })
    } catch (error) {
      console.error("Error al crear deporte:", error)
    }
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
            className="p-2 absolute z-50 bg-white text-black w-64 h-64 flex flex-col shadow-2xl rounded-2xl"
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
                value={newDevice.nombre}
                onChange={handleChange}
              />
              <label>Nueva ip</label>
              <input
                className="border rounded-lg p-1 px-2"
                type="text"
                name="ip"
                value={newDevice.ip}
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
              onClick={() => handleDelete()}
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
      <p className="mt-1">
        <span className={`text-xl text-center w-36 rounded-4xl`}>{status}</span>
      </p>
    </div>
  )
}
