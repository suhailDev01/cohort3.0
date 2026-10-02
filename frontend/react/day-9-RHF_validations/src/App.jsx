import React, { useState } from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from './components/Form'

const App = () => {
  const [toggle, setToggle] = useState(false)
    const [users, setUsers] = useState([])
  return (
     <div>
      <Navbar setToggle={setToggle} />

      {
        toggle ? ( <div className=' flex'>
          {users.map((elem)=>{
          return <UserCard  users={elem} setToggle={setToggle}/>
 } )
          }
           </div> ) : 
        (
          <div 
          className='flex justify-center items-center'> <Form setUsers={setUsers} setToggle={setToggle} /> </div>
        )
      }
   
    </div>
  )
}

export default App