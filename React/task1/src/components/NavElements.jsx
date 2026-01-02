import React from 'react'

const NavElements = () => {
    const navElements = ["About Us", "Services", "Coaches", "Events", "Contacts"]
  return (
    <div className='flex items-center justify-around w-3/5'>
        {navElements.map((element, index) => (
            <div key={index} >
                {element}
            </div>
        ))}
    </div>
  )
}

export default NavElements
