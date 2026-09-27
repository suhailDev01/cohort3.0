import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center'> 
    <div className='w-100 border rounded-2xl bg-gray-600'>
          <h1 className='font-medium text-2xl text-white ml-2'>sign in</h1>
          <p className='text-white ml-2 mb-4'>Enter your credentials to continue </p>
          <div className='flex flex-col gap-3 m-2'>
            <input className='border rounded-xl p-2 ' type="text" placeholder='Email address' />
            <input className='border rounded-xl p-2 ' type="password" placeholder='Password' />
            <button className='border rounded-xl p-2 bg-blue-600 text-white text-xl border-none'>sign in</button>
            <p className='flex items-center justify-center text-white'>Don't have an account ? <span className='text-blue-500'>Create one </span></p>
            </div>
    </div>
    </div>
  )
}

export default Login