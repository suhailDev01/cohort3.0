import React from 'react'

const Create = () => {
  return (
   <div className='flex justify-center '> 
    <div className='w-100 border rounded-2xl bg-gray-600'>
          <h1 className='font-medium text-2xl text-white ml-2'>sign in</h1>
          <p className='text-white ml-2 mb-4'>Enter your credentials to continue </p>
          <div className='flex flex-col gap-3 m-2'>
            <input className='border rounded-xl p-2 ' type="text" placeholder='Full name' />
            <input className='border rounded-xl p-2 ' type="text" placeholder='Email address' />
            <input className='border rounded-xl p-2 ' type="password" placeholder='Password(min 6 chars)' />
            <input className='border rounded-xl p-2 ' type="password" placeholder='Confirm password' />
            <button className='border rounded-xl p-2 bg-blue-600 text-white text-xl border-none'>Create Account
             
                 </button>
            <p className='flex items-center justify-center text-white'>Already have an account ? <span className='text-blue-500'>Sign in </span></p>
            </div>
    </div>
    </div>
  )
}

export default Create