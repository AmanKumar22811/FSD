import React from "react";
import "./student.css";
import img from "../../assets/react.svg";
const Student = ({ data }) => {
  return (
    <div className="icard">
      {/* <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll NO.</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{rollno}</td>
            <td>{branch}</td>
          </tr>
        </tbody>
      </table> */}
      <img src={img} alt="image" />
      {/* {
        JSON.stringify(data)
      } */}

      <div className="college-header">ABES Engineering College</div>
      <p>Student Name : {data.name}</p>
      <p>Roll No. : {data.rollno}</p>
      <p>Branch : {data.branch}</p>
    </div>
  );
};

export default Student;
