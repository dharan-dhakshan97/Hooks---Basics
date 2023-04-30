import React from 'react'
import {useState} from "react";
const String = () => {

const [text,setText]=useState('Welcome');

function handleClick(e)
{
    setText(e.target.value);
}

  return (
    <>
      <input type="text" value={text} onChange={handleClick}></input>
      <p>Your text is {text}</p>
      <button onClick={()=>setText('Welcome')}>Reset</button>
    </>
  );
}

export default String