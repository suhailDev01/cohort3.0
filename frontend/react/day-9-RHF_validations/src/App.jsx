import React, { use, useState } from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from './components/Form'
import { set } from 'react-hook-form'

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
   console.log(users)

   const [updatedData, setupdatedData] = useState(null)
   
   
  // delete button logic
   const deleteUser = (id) =>{
   let filterUser = users.filter((val, index) =>{
    return index !== id
   })
   console.log(filterUser)
   setUsers(filterUser)
   localStorage.setItem("users", JSON.stringify(filterUser))   //local storage update
   }

  return (
     <div>
      <Navbar setToggle={setToggle} />

      {
        toggle ? ( <div className=' flex flex-wrap p-8'>
          {users.map((elem, index)=>{
          return <UserCard 
          setupdatedData={setupdatedData}
          ind = {index}
          deleteUser={deleteUser}
           key={index} 
           users={elem}
            setToggle={setToggle}/>
 } )
          }
           </div> ) : 
        (
          <div 
          className='flex justify-center items-center'> 
          <Form
          updatedData ={updatedData}
           users ={users}
            setUsers={setUsers} 
            setToggle={setToggle} /> </div>
        )
      }
   
    </div>
  )
}

export default App