import React from 'react'
import {useState} from 'react';
const Objects = () => {


const [students,setStudents]=useState({
firstname:'ravi',
lastname:'charan',
emailid:"ravicharan@gmail.com"
});


// function handleClick(e)
// {
//     setStudents(e=>({...students,firstname:e.target.value}));
// }


// function handleChange(e)
// {
//     // setStudents(e=>({...students,lastname:e.target.value}));

// {e=>setStudents({...students,lasname:e.target.value})}
// }


// function handleChanges(e) {
//   setStudents(e=>({ ...students, emailid: e.target.value }));
// }
  return (
    <>
      <div>
        <h3>
          First Name:{" "}
          <input
            type="text"
            onChange={(e) => {
              setStudents({ ...students, firstname: e.target.value });
            }}
            value={students.firstname}
          ></input>
        </h3>{" "}
        <h3>
          Lastname:{" "}
          <input
            type="text"
            onChange={(e) => {
              setStudents({ ...students, lastname: e.target.value });
            }}
            value={students.lastname}
          ></input>{" "}
        </h3>
        <h3>
          Email id:{" "}
          <input
            type="text"
            onChange={(e) => {
              setStudents({ ...students, emailid: e.target.value });
            }}
            value={students.emailid}
          ></input>{" "}
        </h3>
        <h4>
          Your first Name is {students.firstname} and LastName is{" "}
          {students.lastname} and YourEmail is{students.emailid}{" "}
        </h4>
      </div>
    </>
  );
}

export default Objects