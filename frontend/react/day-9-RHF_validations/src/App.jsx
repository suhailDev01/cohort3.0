import React, { useState } from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from './components/Form'

const App = () => {

  // let obj = {
  //   name:"Nazmin",
  //   age:21,
  //   gender:"female",
  //   study:12
  // }
  // localStorage.setItem("user",JSON.stringify(obj))

  // let lsd = localStorage.getItem("user")
  // console.log(lsd
  // )
  // let res = JSON.parse(lsd)
  //   console.log(res)

  const [toggle, setToggle] = useState(false)
    const [users, setUsers] = useState(() => {
   return JSON.parse(localStorage.getItem("users")) || []
    })
  return (
     <div>
      <Navbar setToggle={setToggle} />

      {
        toggle ? ( <div className=' flex flex-wrap p-8'>
          {users.map((elem, index)=>{
          return <UserCard key={index} users={elem} setToggle={setToggle}/>
 } )
          }
           </div> ) : 
        (
          <div 
          className='flex justify-center items-center'> <Form users ={users} setUsers={setUsers} setToggle={setToggle} /> </div>
        )
      }
   
    </div>
  )
}

export default App