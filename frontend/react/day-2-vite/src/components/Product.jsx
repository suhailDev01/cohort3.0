import React from 'react'

const Product = ({products}) => {
  return (
    <div className='m-2'> 
  
    <div className='w-70 border rounded flex flex-col  justify-center   bg-teal-800 mt-6'>
         <div className='w-70 h-50 object-cover p-2 rounded-xl overflow-hidden'> 
        <img src={products.image} alt='img here'/>
        </div>
        <div> 
        <h2 className='font-medium text-white'>{products.name}</h2>
        <p className='text-white'>{products.category}</p>
        <p className='text-white'>{products.price}</p>
        </div>
    </div>
    </div>
  )
}

export default Product