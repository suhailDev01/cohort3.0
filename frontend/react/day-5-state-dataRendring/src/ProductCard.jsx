import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='border-2  rounded p-4 flex flex-col gap-0'>
        <div className='w-50 rounded-2xl'>
             <img src= {product.image} alt="img" />
             </div>
             <div>
                <h2 className='font-semibold '>{product.title.substring(0,15)}</h2>
                <p className='text-cyan-400'>{product.price}</p>
                <p className='text-xm'>{product.category}</p>
             </div>
             <button className='bg-amber-600 p-2 rounded-sm'> button </button>
    </div>
  )
}

export default ProductCard