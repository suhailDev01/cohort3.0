import React, { use, useState } from 'react'

const App = () => {
  const [count, setCount]= useState(0)
  let [user, setUser]= useState(0)
  return (
    <div>
      <h1>Count is -{count}</h1>
      <h1>Name is -{user}</h1>
      <button
      onClick={()=>{
        setCount(count+1)
      }}
      >
        increment
      </button>

      <button
      onClick={()=>{
       user++;
      }}
      >changeName</button>
    </div>
  )
}

export default App