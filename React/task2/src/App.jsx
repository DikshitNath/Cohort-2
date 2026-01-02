import React from 'react'
import Card from './components/Card'
import people from './assets/PeopleData'

const App = () => {
  return (
    <div className='flex flex-wrap gap-6 justify-center p-4'>
      {people.map((person, index) => (
        <Card image={person.photo} title={person.name} description={person.description} followers={person.followers} following={person.following} key={index} />
      ))}
    </div>
    
  )
}

export default App
