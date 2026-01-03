import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const Contact = (props) => {
  return (
    <div className='flex justify-between w-1/4 items-center px-4 py-1 border border-gray-300 rounded-lg mb-4'>
      <div className='flex items-center gap-3'>
        <FaUserCircle className='text-gray-500 text-4xl' />
        <div>
            <h1>{props.name}</h1>
            <h1 className='font-light text-sm text-gray-600'>{props.number}</h1>
        </div>
      </div>
      <div>
        <IoMdCall className='text-2xl'/>
      </div>
    </div>
  )
}

export default Contact
