import React, { useRef, useState } from 'react'

const Form = () => {

// const [formdata, setFormData] = useState({});
// console.log("app rendering...")
  // useRef()
let inpRef = useRef({})
console.log(inpRef)

 const handleSubmit=(e)=>{
    e.preventDefault()
     console.log(inpRef.current.productName.value)
     console.log(inpRef.current.price.value)
     console.log(inpRef.current.cat.value)
     console.log(inpRef.current.image.value)
 }
  return (
    <div className='w-90 bg-gray-300 border rounded m-2'>
         <form onSubmit={handleSubmit} action="" className='flex flex-col gap-2 p-4  '>
              <input 
               ref={(e)=>(inpRef.current.productName = e)}
              className='p-2 border border-gray-400 rounded' type="text" placeholder='ProductName' />
              <input
               ref={(e)=>(inpRef.current.price = e)}
              className='p-2 border border-gray-400 rounded' type="text" placeholder='Price' />
            <span>Product Category</span> 
            <select
               ref={(e)=>(inpRef.current.cat = e)}
            className='p-2 border border-gray-400 rounded'>
           <option value="men">Men</option>
           <option value="women">Women</option>
           <option value="kids">Kids</option>
           </select>
           <input 
             ref={(e)=>(inpRef.current.image = e)}
           className='p-2 border border-gray-400 rounded' type="text" placeholder='image' />
           <button
          onClick={()=>console.log(inpRef.current.value)}
            
            className='p-2 border bg-blue-500 text-white rounded'>Create</button>
         </form>
    </div>
  )
}

export default Form;