import axios from "axios"
import { useState } from "react"
import { CiSquarePlus } from "react-icons/ci"
import { RxCross2 } from "react-icons/rx"

export default function AppendCard() {
  const [form, setForm] = useState(false)
  const [newDevice, setNewDevice] = useState({ nombre: "", ip: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target
    setNewDevice({
      ...newDevice,
      [name]: value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isSubmitting) {
      return
    }
    setIsSubmitting(true)

    try {
      await axios.post("http://localhost:5000/postDevices", newDevice)
      console.log("Dispositivo creado con éxito")
      setNewDevice({ nombre: "", ip: "" })
    } catch (error) {
      console.error("Error al crear deporte:", error)
    }
  }
  return (
    <div>
      {form === true ? (
        <form
          onSubmit={handleSubmit}
          className="p-2 bg-white w-64 h-64 flex flex-col shadow-2xl rounded-2xl"
        >
          <div className="flex justify-end">
            <button
              className="p-2 hover:text-white cursor-pointer w-max rounded-lg duration-300 hover:bg-black"
              onClick={() => setForm(!form)}
            >
              <RxCross2 size={20} />
            </button>
          </div>
          <div className="flex flex-col px-4 space-y-2">
            <label>Nombre</label>
            <input
              required
              className="border rounded-lg py-1 px-2"
              type="text"
              name="nombre"
              value={newDevice.nombre}
              onChange={handleChange}
            />
            <label>ip</label>
            <input
              required
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
            Crear
          </button>
        </form>
      ) : (
        <button
          onClick={() => setForm(!form)}
          className="cursor-pointer p-4 space-y-4 w-64 h-38 flex flex-col items-center shadow-2xl rounded-2xl border-l-6 hover:scale-110 duration-500"
        >
          <CiSquarePlus size={70} />
          <p className="text-xl font-semibold text-[#062913]">
            Agregar un dispositivo
          </p>
        </button>
      )}
    </div>
  )
}
