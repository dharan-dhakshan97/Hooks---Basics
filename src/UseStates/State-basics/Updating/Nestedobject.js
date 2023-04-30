import React from 'react'
import {useState} from "react";
const Nestedobject = () => {
    const [student, setStudent] = useState({
      name: "rahul",
      address: {
        street: "kannagi",
        city: "chennai",
        image: "https://i.imgur.com/Sd1AgUOm.jpg",
      },
    });
  return (
    <>
      <label>
        {" "}
        Name:{" "}
        <input
          type="text"
          onChange={(e) => {
            setStudent({ ...student, name: e.target.value });
          }}
          value={student.name}
        />
      </label>
      <br></br>
      <div>
      <label>
        {" "}
        Street:{" "}
        <input
          type="text"
          onChange={(e) => {
            setStudent({
              ...student,
              address: { ...student.address, street: e.target.value },
            });
          }}
          value={student.address.street}
        />
      </label></div>
      <br></br>
      <div>
      <label>
        {" "}
        City:{" "}
        <input
          type="text"
          onChange={(e) => {
            setStudent({
              ...student,
              address: { ...student.address, city: e.target.value },
            });
          }}
          value={student.address.city}
        />
      </label> </div>
      <br></br>
      <div>
      <label> Image url:
        <input
          type="text"
          onChange={(e) => {
            setStudent({
              ...student,
              address: { ...student.address, image: e.target.value },
            });
          }}
          value={student.address.image}
        />
      </label></div>

      <h4>
        Your name is {student.name} and Your address is street{" "}
        {student.address.street}
        city {student.address.city}
      </h4>

      <div>
        <h1>Image {student.address.image}</h1>
      </div>
    </>
  );
}

export default Nestedobject