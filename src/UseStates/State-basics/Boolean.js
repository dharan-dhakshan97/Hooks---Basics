import React from 'react'
import {useState} from "react";
const Boolean = () => {
    const [fav,setFav]=useState(true);

function handleChange(e)
{
setFav(e.target.checked);
}


  return (
    <>
    
    <label>
        <input type="checkbox"  checked={fav} onChange={handleChange}/>
        I Like This!
    </label>
 <p>  I {fav ? 'Like this dress' : 'dont like this'}</p>
    </>
  )
}

export default Boolean;