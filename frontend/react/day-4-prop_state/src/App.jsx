import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { useState } from 'react'

const App = () => {
    let [count, setCount] = useState(0)
  return (
    <div>
             <h1>couter is {count}</h1>
         <button
          onClick={ ()=>{
            setCount(count+1)
          }}
          > button </button>
           <Navbar />
           <Hero />
           <Footer />
    </div>
   
  )
}

export default App