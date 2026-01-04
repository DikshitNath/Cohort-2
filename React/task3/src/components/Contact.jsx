import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className="flex justify-between w-1/4 items-center px-4 py-2 border border-gray-300 rounded-lg mb-4">
      <div className="flex items-center gap-3">
        <FaUserCircle className="text-gray-500 text-4xl" />
        <div>
          <h1 className="font-medium">{name}</h1>
          <p className="text-sm text-gray-600">{number}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <IoMdCall className="text-2xl text-green-600 cursor-pointer" />
        <button
          onClick={onDelete}
          className="text-red-500 font-bold hover:text-red-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Contact;
