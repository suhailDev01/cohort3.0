import React from 'react'

const Navbar = ({setIsCartOpen}) => {
  return (
    <div className='bg-black p-5 text-white flex justify-between m-4 rounded'>
        <div>
            <h2>Logo</h2>
        </div>
        <div className='flex gap-4 text-xl'>
            <p 
             onClick={()=> setIsCartOpen(false)} className='cursor-pointer'
            >home</p>
            <p
            onClick={()=> setIsCartOpen(true)} className='cursor-pointer'
            >cart</p>
        </div>
        <button>Login</button>
    </div>
  )
}

export default Navbar