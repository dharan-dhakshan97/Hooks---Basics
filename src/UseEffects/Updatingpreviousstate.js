import React from 'react'
import {useState,useEffect} from "react";
const Updatingpreviousstate = () => {

    const [count,setCount] = useState(0);

   function handleClick()
    {
setCount(count+1);
    }

useEffect(()=>
{
    console.log(count);
    // const a=setInterval(()=>{
    //     setCount(b=>b+1);
    // },2000);
    // return () => clearInterval(a);
},[count]);

  return (
    <>
    <button onClick={handleClick}>ADD</button>
    <h1>{count}</h1>   </>
  )
}

export default Updatingpreviousstate;