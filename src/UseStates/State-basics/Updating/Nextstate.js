import React from 'react'
import {useState} from "react";
const Nextstate = () => {
    const [age,setAge]=useState(40);

function increment()
{
    setAge(age+1);
}
  return (
    <div>
        <h1>Your age is {age}</h1>
        <button onClick={()=>{increment();
        increment();
    increment();}}>+3</button>
    <button onClick={()=>{increment();}}>+1</button>
    </div>
  )
}

export default Nextstate