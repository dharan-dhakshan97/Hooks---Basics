import React from 'react'
import {useState} from "react";
const Number = () => {


const [incre,setIncre] =useState(0);
const [decre,setDecre]=useState(0);
// const [reset,setReset]=useState();

function increment()
{
    setIncre(incre+1);
}


function decrement()
{
    setDecre(decre-1);
}

  return (
    <>
      <h1>The Increment value is :{incre}</h1>
      <button onClick={increment}>Increment</button>
      <h1>The Decrement value is : {decre} </h1>
      <button onClick={decrement}> Decrement </button>
      {/* <button onClick={() => setReset(0)}>Reset</button> */}
    </>
  );
}

export default Number;