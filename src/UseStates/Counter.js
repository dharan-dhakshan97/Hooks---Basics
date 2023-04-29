import React from 'react'

const Counter = () => {

let x=0;

function handleClick()
{
    x=x+1;
}
console.log(x);
 return (
   <>
     <h1>{x}</h1>
     <button onClick={handleClick}>Increment</button>
     
   </>
 );
}

export default Counter;
