import React from 'react'

const Register = ({setToggle}) => {
  return (
    <div className='bg-white flex flex-col w-90 p-6 rounded-xl  gap-4'>
          <form className='flex flex-col gap-4' action="">
              <h1>Register</h1>
              < input className='p-2 border border-gray-400 rounded' type="email" placeholder="Email" />
             < input className='p-2 border border-gray-400 rounded'type="password" placeholder="Password" />
             <button className='p-2 bg-blue-500 text-white rounded'>Register</button>
             </form>
             <p onClick={()=>{
                setToggle(true)
             }}>
                 Already have an Account? <span className='text-blue-600 cursor-pointer'> Login here</span></p>
    </div>
  )
}

export default Register