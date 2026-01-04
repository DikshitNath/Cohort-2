import React from 'react'

const Form = ({allContacts, setAllContacts}) => {
    const [name, setName] = React.useState('')
    const [number, setNumber] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setAllContacts([...allContacts, {name, number}])
        setName('')
        setNumber('')
    }   

  return (
    <div className='mb-8 w-1/4'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" className='border border-gray-400 rounded p-2' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Phone Number" className='border border-gray-400 rounded p-2' value={number} onChange={(e) => setNumber(e.target.value)} />
            <button className='bg-red-400 text-white py-2 rounded-lg'>Save</button>
        </form>
    </div>
  )
}

export default Form
