import React, { use } from 'react'
import {useForm} from 'react-hook-form'
const Form = () => {
  let {register,
     handleSubmit,
      reset,
      formState:{errors} } = useForm();

      console.log("errors->", errors)

      let formSubmit = (data)=>{
      console.log(data)
      }
  return (
    <div className='flex flex-col gap-4 m-6 items-center'>
        <h1 className='text-2xl font-bold'>Create user</h1>
        <form 
        onSubmit={handleSubmit(formSubmit)
        }
        className='w-80 p-3 flex flex-col gap-3  border rounded-xl '>
            < input 
            {...register("name",{
              required: "name is required"
            })}
            className='p-2  border rounded outline-0'
             type="text" placeholder='Name' />
            {errors.name &&  <p className='text-red-600'>Name</p>}
            < input 
            {...register("email",{
              required:"email is required"
            })} 
            className='p-2  border rounded outline-0'
             type="email" placeholder='Email' />
           {errors.email &&   <p className='text-red-600'>Email</p>}
            < input 
            {...register("number",{
              required:"number is required"
            })} 
            className='p-2  border rounded outline-0'
             type="number" placeholder='Mobile Number' />
                 {errors.email &&   <p className='text-red-600'>Number</p>}
            < input 
            {...register("image", {
              required:"image is required"
            })} 
            className='p-2  border rounded outline-0'
             type="url" placeholder='Image' />
            {errors.image &&   <p className='text-red-600'>Image</p>}
            <button
            className='p-2  border rounded outline-0 bg-blue-600 cursor-pointer text-white'
            >Add User</button>
        </form>
    </div>
  )
}

export default Form