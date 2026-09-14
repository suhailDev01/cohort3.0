import React from 'react'

const ProductCard = ({product}) => {

  return (
    <div className='m-4 p-4 border-2 bg-indigo-100 rounded flex flex-col'>
         <div className='w-55 border rounded'>
            <img src={product.image} alt="img" />
         </div>
         <div>
            <h2 className='font-medium'> {product.name}</h2>
            <p className='text-sm'>{product.description.substring(0,15)}</p>
            <p className='text-sm'>{product.brand}</p>
            <p className='text-blue-500'>{product.price}</p>
         </div>
         <div className='flex justify-between'>
            <button className='bg-amber-700 p-2 w-18 rounded'>add</button>
            <button className='bg-amber-400 p-2 w-18 rounded'>remove</button>
         </div>
    </div>
  )
}

export default ProductCard