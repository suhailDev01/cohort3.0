import { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <div className='bg-gray-400 h-screen flex justify-center items-center'>

  {
    toggle ? <Login />:<Register />
  }
    </div>
  )
    
  
}

export default App