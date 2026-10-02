import React, { use } from 'react'

const UserCard = ({users}) => {
  return (
    <div className='w-70 p-3 m-3 border rounded-xl bg-fuchsia-100 overflow-hidden shadow-teal-950'>
          <div>
            <img 
            className='w-full rounded object-cover'
            src={users.image} alt="" />
          </div>
           <div 
           className='flex flex-col '>
            <h2 className='text-black font-medium'>{users.name}</h2>
            <p className='text-black'>{users.email}</p>
             <p className='text-black'>{users.number}</p>            
           </div>
           <div className='flex justify-between mt-1'>
            < button className=' p-2 bg-blue-500 text-white border-none rounded '>Update</ button>
            < button className='p-2 bg-amber-600 text-white border-none rounded ' >Delete</ button>
           </div>
    </div>
  )
}

export default UserCard