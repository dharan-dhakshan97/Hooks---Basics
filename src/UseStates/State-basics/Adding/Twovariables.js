import React from 'react'
import {useState} from "react";
const Twovariables = () => {
const [name,setName]=useState("Ravi");
const [age,setAge]=useState(42);


function handleChange()
{
  
  setName("Rahul");}

function handleClick()
{
setAge(age+1);
}

  return (
    <>
    
    <div>
<h1>Your name is {name} and your age is {age} </h1>
<button onClick={handleChange}>Change Name</button>
<button onClick={handleClick}>Change Age</button>
    </div>
    </>
  )
}

export default Twovariables;