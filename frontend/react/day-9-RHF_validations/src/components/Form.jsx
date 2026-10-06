import React, { use, useState } from 'react'
import {useForm} from 'react-hook-form'

const Form = ({setUsers, setToggle, users}) => {

  let {register,
     handleSubmit,
      reset,
      formState:{errors} } = useForm({
        mode:"onChange"
      });

       

      let formSubmit = (data)=>{
      
      let arr = [...users, data];
      setUsers(arr);
      localStorage.setItem("users", JSON.stringify(arr)) 
      reset()
      setToggle((prev) => !prev)
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
            {errors.name &&  <p className='text-red-600'>{errors.name.message}</p>}
            < input 
            {...register("email",{
              required:"email is required",
              pattern:{
                value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:"please, enter valid email"
              }
            })} 
            className='p-2  border rounded outline-0'
             type="email" placeholder='Email' />
           {errors.email &&   <p className='text-red-600'>{errors.email.message}</p>}
            < input 
            {...register("number",{
              required:"number is required",
              minLength:{
                value:10,
                message:"minimum 10 digits are required"
              },
              maxLength:{
                value: 10,
                message:"maximum 10 digits are required"
              }
            })} 
            className='p-2  border rounded outline-0'
             type="number" placeholder='Mobile Number' />
                 {errors.number &&   <p className='text-red-600'> {errors.number.message} </p>}
            < input 
            {...register("image", {
              required:"image is required"
            })} 
            className='p-2  border rounded outline-0'
             type="url" placeholder='Image' />
            {errors.image &&   <p className='text-red-600'>{errors.image.message} </p>}
            <button
            className='p-2  border rounded outline-0 bg-blue-600 cursor-pointer text-white'
            >Add User</button>
        </form>
    </div>
  )
}

export default Form