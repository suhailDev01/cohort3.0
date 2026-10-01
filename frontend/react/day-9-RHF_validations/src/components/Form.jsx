import React from 'react'

const Form = () => {
  return (
    <div className='flex flex-col gap-4 m-6 items-center'>
        <h1 className='text-2xl font-bold'>Create user</h1>
        <form className='w-80 p-3 flex flex-col gap-3  border rounded-xl '>
            <input 
            className='p-2  border rounded outline-0'
             type="text" placeholder='Name' />
            <input 
            className='p-2  border rounded outline-0'
             type="email" placeholder='Email' />
            <input 
            className='p-2  border rounded outline-0'
             type="number" placeholder='Mobile Number' />
          
            <button
            className='p-2  border rounded outline-0 bg-blue-600 cursor-pointer text-white'
            >Add User</button>
        </form>
    </div>
  )
}

export default Form