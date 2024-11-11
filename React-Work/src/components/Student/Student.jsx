import React from "react";
import "./student.css";
const Student = ({ name, rollno, branch }) => {
  return (
    <div className="icard">
      <table border={2}>
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
      </table>
    </div>
  );
};

export default Student;
