import React from 'react'
import NavBar from './components/NavBar'
import MiddleText from './components/MiddleText'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='h-screen px-6 py-6 flex flex-col gap-6'>
      <NavBar />
      <Hero />
    </div>
  )
}

export default App
