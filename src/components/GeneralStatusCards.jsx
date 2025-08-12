import React from "react"

export default function GeneralStatusCards({
  Title,
  ValueInNetwork,
  BorderColor,
  TextColor,
  Icon,
}) {
  return (
    <article
      className={`${BorderColor} px-4 h-42 flex place-items-center w-full shadow-2xl rounded-2xl border-l-6`}
    >
      <div className="flex flex-col w-full">
        <div className={`text-Gr text-2xl`}>{Title}</div>
        <div className="flex justify-between items-center">
          <span className={`${TextColor} text-4xl font-bold`}>
            {ValueInNetwork}
          </span>
          {Icon}
        </div>
      </div>
    </article>
  )
}
