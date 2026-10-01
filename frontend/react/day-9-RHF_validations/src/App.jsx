import React, { useState } from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from './components/Form'

const App = () => {
  const [toggle, setToggle] = useState(true)
  return (
     <div>
      <Navbar setToggle={setToggle} />

      {
        toggle ? ( <div className='flex'> <UserCard /> </div> ) : 
        (
          <div 
          className='flex justify-center items-center'> <Form /> </div>
        )
      }
   
    </div>
  )
}

export default App