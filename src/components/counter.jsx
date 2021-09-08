import React, { useState } from "react";

export default function Counter(){

    const [count,setCount] = useState(0);

    const handleClick = (increment) =>{
        setCount(count+increment);
      };
    
      const Multiply2 = () => {
        setCount(count * 2);
      }
    return ( 
        <div>     
    <h2>Count:{count}</h2>
    <button onClick={() => {handleClick(1)}}>Add 1</button>
    <button onClick={() => {handleClick(-1)}}>Subtract 1</button>
    <button onClick={Multiply2}>Double</button>
    </div>
    );
}