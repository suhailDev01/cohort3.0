import React from 'react'

const Form = () => {
  return (
    <div className='w-90 bg-gray-300 border rounded m-2'>
         <form action="" className='flex flex-col gap-2 p-4  '>
              <input className='p-2 border border-gray-400' type="text" placeholder='Product Name' />
              <input className='p-2 border border-gray-400' type="text" placeholder='Price' />
            <span>Product Category</span> 
            <select>
           <option value="men">Men</option>
           <option value="women">Women</option>
           <option value="kids">Kids</option>
           </select>
           <input className='p-2 border border-gray-400' type="text" placeholder='image' />
           <button className='p-2 border bg-blue-500'>Create</button>
         </form>
    </div>
  )
}

export default Form;