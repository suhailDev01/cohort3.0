import React, { useState } from 'react'

const Create = ({setToggle}) => {
     const [form, setForm] = useState({
      name: "",
      email: "",
      password:"",
      confirmPassword:""
     })
   const handleChange =(e)=>{
    const {name, value} = e.target 
    setForm({...form,
      [name]:value

    })
   }
   const submitHandler=(e)=>{
    e.preventDefault()
    setForm({
      name:"",
      email:"",
      password:"",
      confirmPassword:""
      })
   
    console.log(form)
   }
  return (
   <div className='flex justify-center mb-4'> 
    <form 
    onSubmit={submitHandler}
    className='w-100 border rounded-2xl bg-gray-600' action="method">
          <h1 className='font-medium text-2xl text-white ml-2'>Crate account</h1>
          <p className='text-white ml-2 mb-4'>Joind my first webpage </p>
          <div className='flex flex-col gap-3 m-2'>
            < input 
            name='name'
            value={form.name}
          
               onChange={handleChange} className='border rounded-xl p-2 ' type="text" placeholder='Full name' />
            < input 
            name='email'
            value={form.email}
          
            onChange={handleChange} className='border rounded-xl p-2 ' type="text" placeholder='Email address' />
            < input 
            name='password'
            value={form.password}
              
            onChange={handleChange} className='border rounded-xl p-2 ' type="password" placeholder='Password(min 6 chars)' />
            < input 
            name='confirmPassword'
            value={form.confirmPassword}
             
            onChange={handleChange} className='border rounded-xl p-2 ' type="password" placeholder='Confirm password' />
            <button className='border rounded-xl p-2 bg-blue-600 text-white text-xl border-none'>Create Account
             
                 </button>
            <p className='flex items-center justify-center text-white'>Already have an account ? <span 
            onClick={()=>{
                setToggle((prev)=>!prev)
            }}
            className='text-blue-500'>Sign in </span></p>
            </div>
    </form>
    </div>
  )
}

export default Create