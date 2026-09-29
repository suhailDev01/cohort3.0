import React, { useState } from "react"

const Login = ({setToggle}) => {
    const [formData, setFormData] = useState({
      email:"",
      password:""
    })
    const handleChange =(e)=>{
      const {name, value} = e.target 
      setFormData({...formData,
        [name]: value
      })
    }
    const submitHandler=(e)=>{
      e.preventDefault()
      setFormData({
        email:"",
        password:""
      })
      console.log(formData)
    }
  return (
    <div className='flex justify-center mb-6'> 
    <form 
    onSubmit={submitHandler}
    className='w-100 border rounded-2xl bg-gray-600' action="method">
          <h1 className='font-medium text-2xl text-white ml-2'>sign in</h1>
          <p className='text-white ml-2 mb-4'>Enter your credentials to continue </p>
          <div className='flex flex-col gap-3 m-2'>
            <  input 
            name="email"
            value={formData.email} 
                 onChange={handleChange}
            className='border rounded-xl p-2 ' type="text" placeholder='Email address' />
            <  input 
            name="password"
            value={formData.password} 
                 onChange={handleChange}
            className='border rounded-xl p-2 ' type="password" placeholder='Password' />
            <button className='border rounded-xl p-2 bg-blue-600 text-white text-xl border-none'>sign in</button>
            <p className='flex items-center justify-center text-white'>Don't have an account ? <span
            onClick={()=>{
              setToggle((prev)=>!prev)
            }}
            
            className='text-blue-500'>Create one </span></p>
            </div>
    </form>
    </div>
  )
}

export default Login