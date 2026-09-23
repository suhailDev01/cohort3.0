import React from 'react'
import { useState } from 'react'

const Register = ({setToggle}) => {
    const [form, setForm] = useState({
          name:"",
          email:"",
          password:""
    })
    const [users , setUsers] = useState([])
       console.log(users)
    const handleChange = (e) => {
    let {name,value} = e.target;
    setForm({...form , [name] : value})
    }
    const submitHnadler = (e)=>{
     e.preventDefault()
    setUsers([...users, form])
    setForm({
      name:"",
      email:"",
      password:""
    })
    }
  return (
    <div className='bg-white flex flex-col w-90 p-6 rounded-xl  gap-4'>
          <form
            onSubmit={submitHnadler} 
           className='flex flex-col gap-4' action="">
              <h1>Register</h1>
              <input 
              required
               name='name'
              value={form.name}
               onChange={handleChange} 
              className='p-2 border border-gray-400 rounded' type="text" placeholder="Name" />
              <input 
              required 
               name='email'
             value={form.email}
              onChange={handleChange} 
              className='p-2 border border-gray-400 rounded' type="email" placeholder="Email" />
             <input
              required
              name='password'
              value={form.password}
              onChange={handleChange}
              className='p-2 border border-gray-400 rounded' type="password" placeholder="Password" />
             <button className='p-2 bg-blue-500 text-white rounded'>Register</button>
             </form>
             <p> Already have an Account? 
                <span 
                onClick={()=>
                setToggle((prev)=>!prev) }      //true or false bhi user kar skte h prev ke place pr 
                className='text-blue-600 cursor-pointer'> Login here</span></p>
    </div>
  )

}
export default Register