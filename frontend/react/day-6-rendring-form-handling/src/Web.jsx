import React, { useState } from 'react'

const Web = () => {
    const [name, setName] =useState("")
    console.log(name)
    const [email, setEmail] =useState("")
    console.log(email)
    const [password, setPassword] =useState("")
    console.log(name)
  return (
    <div className='flex flex-col gap-5 w-70 m-2'>
        <input onChange={(e)=>{
            setName(e.target.value)   }}
         className='border-2' type='text' placeholder='Name'/>
        <input onChange={(e)=>{
            setEmail(e.target.value)
        }} className='border-2' type='text' placeholder='Email'/>
       
        <input onChange={(e)=>{
            setPassword(e.target.value)
        }} className='border-2' type='text' placeholder='Paasword'/>
            <button className='border-2'>Submit</button>
        <h1>this is name- {name}</h1>
         <h1>this is email- {email}</h1>
        <h1>this is password - {password}</h1>
        
    </div>
  )
}

export default Web