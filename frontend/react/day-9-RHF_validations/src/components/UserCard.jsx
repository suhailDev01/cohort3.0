import React from 'react'

const UserCard = () => {
  return (
    <div className='w-70 p-3 m-3 border rounded-xl bg-fuchsia-100 overflow-hidden shadow-teal-950'>
          <div>
            <img 
            className='w-full rounded object-cover'
            src="https://i.pinimg.com/originals/4f/5a/d4/4f5ad4a5fe0eaabf1aa5f75b68291ddd.jpg" alt="" />
          </div>
           <div 
           className='flex flex-col '>
            <h2 className='text-black font-medium'>Name</h2>
            <p className='text-black'>Email</p>
             <p className='text-black'>Contact</p>            
           </div>
           <div className='flex justify-between mt-1'>
            < button className=' p-2 bg-blue-500 text-white border-none rounded '>Update</ button>
            < button className='p-2 bg-amber-600 text-white border-none rounded ' >Delete</ button>
           </div>
    </div>
  )
}

export default UserCard