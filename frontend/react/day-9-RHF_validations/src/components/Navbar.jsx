import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className='p-4 flex justify-between items-center bg-emerald-700 text-white '>
     
     <div>
      <img
      width={40} 
      className='rounded-3xl' 
      src=" https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png" alt="" />
     </div>
       <div className='flex gap-3 font-medium'>
        <p>HOME</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
       </div>
       <button
       onClick={()=> setToggle(prev => !prev)}
        className='p-2 bg-blue-900 text-white rounded-xl'>Create User</button>
  </div>
  )
}

export default Navbar