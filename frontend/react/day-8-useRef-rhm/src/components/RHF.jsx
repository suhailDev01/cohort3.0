import React from 'react'
import { useForm } from 'react-hook-form';
const RHF = () => {
    let data = useForm()
    console.log(data)
  return (
    <div>
         <form className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg flex flex-col gap-4">

  <h2 className="text-2xl font-bold text-center">
    Create Account
  </h2>

  <input
    type="text"
    placeholder="Full Name"
    className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
  />

  <input
    type="email"
    placeholder="Email"
    className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
  />

  <input
    type="password"
    placeholder="Password"
    className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
  />

  <input
    type="password"
    placeholder="Confirm Password"
    className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
  />

  <input
    type="tel"
    placeholder="Phone Number"
    className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
  />

  <input
    type="text"
    placeholder="City"
    className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
  />

  <button
    type="submit"
    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
  >
    Register
  </button>

</form>
    </div>
  )
}

export default RHF