import React from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'

const App = () => {
  return (
    <div className='bg-gray-800 h-screen '>
      <Navbar />
      <UserCard />
    </div>
  )
}

export default App