import { useState } from "react"
import { CiSquarePlus } from "react-icons/ci"
import { RxCross2 } from "react-icons/rx"
import usePost from "../hooks/usePost"

export default function AppendCard() {
  const [form, setForm] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    ip: "",
    localizacion: "",
  })
  const { makeRequest, newDevice } = usePost()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await makeRequest(formData)
    setFormData({ nombre: "", ip: "", localizacion: "" })
    setForm(!form)
  }

  return (
    <div>
      {form === true ? (
        <form
          onSubmit={handleSubmit}
          className="p-2 bg-white w-64 h-max flex flex-col shadow-2xl rounded-2xl"
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
              onChange={handleInputChange}
            />
            <label>ip</label>
            <input
              required
              className="border rounded-lg p-1 px-2"
              type="text"
              name="ip"
              value={newDevice.ip}
              onChange={handleInputChange}
            />
            <label>Descripcion</label>
            <input
              required
              className="border rounded-lg py-1 px-2"
              type="text"
              name="localizacion"
              value={newDevice.localizacion}
              onChange={handleInputChange}
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
          className="cursor-pointer py-8 space-y-4 w-64 h-48 flex flex-col items-center shadow-2xl rounded-2xl border-l-6 hover:scale-110 duration-300"
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
