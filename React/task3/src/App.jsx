import React, { useContext } from 'react'
import Contact from './components/Contact'
import Form from './components/Form'


const App = () => {

  const[allContacts, setAllContacts] = React.useState([])
  
  return (
    <div className='flex flex-col items-center py-12'>
      <Form allContacts={allContacts} setAllContacts={setAllContacts} />
      {allContacts.map((contact, index) => (
        <Contact key={index} name={contact.name} number={contact.number} />
      ))}
    </div>
  )
}

export default App
