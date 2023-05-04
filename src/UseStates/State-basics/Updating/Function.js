import React from "react";
import { useState, useEffect } from "react";
const Function = () => {
  const [age, SetAge] = useState(40);

  function increment() {
    SetAge((a) => a + 1); //updating based on the previous state passing the updater function
  }

  useEffect(() => {
    console.log(age);
    // setTimeout(()=>
    // {
    //   SetAge((age)=>age+1);
    // },2000);
  }, [age]);

  return (
    <div>
      <h1>Your age is {age}</h1>
      <button
        onClick={() => {
          increment();
          increment();
        }}
      >
        +2
      </button>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
    </div>
  );
};

export default Function;
