
import React from "react";
import About from "./About";
let App = () =>{  
let ui = React.createElement("div",{}[
  React.createElement("h1",{},"Hello cohort Member"),
  React.createElement("h2",{},"My name is suhail khan"),
  React.createElement("p",{},"i recetnly complete BCA from Buddha Institute of Technology")
])

  return (
      <div>
        <h1>Hello cohort Members</h1>
        <h2> My name is suhail khan</h2>
        <p>i recetnly complete BCA from Buddha Institute of Technology</p>
        <About/>
      </div>
  )
 
};


export default App;