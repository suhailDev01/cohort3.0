import React, { useState } from "react";

const Counter = () => {

  // here is counter
  let [count, setCount] = useState(0);
  console.log("Counter is rendring");
  return (
    <div>
      <h1 className="bg-pink-800  --color-white: #fff">Counter is -{count}</h1>

      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }}
      >
       
        Button
      </button>
    </div>
  );
};

export default Counter;
