import React from 'react'
import Button from './Button'

const MiddleText = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-5'>
        <div className='flex flex-col items-center'>
            <h1 className='text-6xl'>Unleash Your Inner Champion Today.</h1>
            <h1 className='text-6xl'> All in One Place.</h1>
        </div>
        <div className='flex flex-col items-center'>
            <h3 className='text-2xl'>Experience the ultimate tennis experience -- where passion meets performance, </h3>
            <h3 className='text-2xl'>and every swing brings you closer to victory.</h3>
        </div>
      
      <Button text="Start Your Own Journey" />
    </div>
  )
}

export default MiddleText
