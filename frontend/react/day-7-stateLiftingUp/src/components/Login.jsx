import React from 'react'

const Login = () => {
  return (
    <div className='bg-white flex flex-col w-90 p-6 rounded-xl  gap-4'>
          <form className='flex flex-col gap-4' action="">
              <h1>Login</h1>
              <input className='p-2 border border-gray-400 rounded' type="text" placeholder="Name" />
              <input className='p-2 border border-gray-400 rounded' type="email" placeholder="Email" />
              <input className='p-2 border border-gray-400 rounded'type="password" placeholder="Password" />
             <button className='p-2 bg-blue-500 text-white rounded'>login</button>
             </form>
             <p>Didn't have an account? <span className='text-blue-600 cursor-pointer'>Register here</span></p>
    </div>
  )
}

export default Login