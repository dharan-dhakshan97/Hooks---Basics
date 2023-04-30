import React from 'react'
import {useState} from "react";
const Function = () => {
    const [age,SetAge]=useState(40);


function increment()
{
    SetAge(a=>a+1);
}

  return (
    <div>
        <h1>Your age is {age}</h1>
        <button onClick={()=>{increment();
        increment();
        }}>+2</button>
        <button onClick={()=>{increment();
        increment();increment();}}>+1</button>
    </div>
  )
}

export default Function