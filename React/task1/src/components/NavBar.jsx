import React from 'react'
import Logo from './Logo'
import NavElements from './NavElements'
import Button from './Button'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center w-full'>
        <Logo />
        <NavElements />
        <Button text="Book Now" />
    </div>
  )
}

export default NavBar
