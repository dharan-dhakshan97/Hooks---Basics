import React from 'react'
import {useState} from "react";
const Boolean = () => {
    const [fav,setFav]=useState(true);

function handleChange(e)
{
setFav(e.target.value);
}


  return (
    <>
    
    <label>
        <input type="radio"  value={fav} onChange={handleChange}/>
        I Like This!
    </label>
 <p>  I {fav ? 'Like this dress' : 'dont like this'}</p>
    </>
  )
}

export default Boolean;