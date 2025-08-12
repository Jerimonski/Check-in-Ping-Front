import React from "react"

export default function StatusCards() {
  return (
    <article
      className={`border-l-Green-Light space-y-2 px-6 pt-6 h-42 w-64 flex flex-col items-center shadow-2xl rounded-2xl border-l-6`}
    >
      <span className="text-2xl font-semibold">Local</span>
      <span className="text-2xl font-light">130.10.10.1</span>
      <span
        className={`text-xl text-center font-semibold w-36 rounded-4xl bg-[#8bffbf] text-[#062913]`}
      >
        activo
      </span>
    </article>
  )
}
