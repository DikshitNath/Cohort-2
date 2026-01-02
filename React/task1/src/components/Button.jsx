import React from 'react'
import {RiArrowRightUpLongLine } from "@remixicon/react";


const Button = ({text}) => {
  return (
    <div>
      <button className="bg-[#0D1A2D] hover:bg-blue-700 text-white py-2 px-4 rounded-4xl flex items-center gap-1">
        {text} {<RiArrowRightUpLongLine />}
      </button>
    </div>
  )
}

export default Button
