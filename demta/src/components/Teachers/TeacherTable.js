import React from "react";
import "./teachers.css"
// import App from "../../App"
// import employees from "../../employees.json"



function TeacherTable(props) {
  return (
    <>
    
      
      <tbody className="teacher-table">
        <tr>
        {/* <td>{props.id}</td> */}
        <td>{props.name}</td>
        <td>{props.subject}</td>
        <td>{props.level}</td>
        <td>{props.city}</td>
        <td>{props.neighborhood}</td>
        <td>{props.email} <br></br> {props.phone}</td>
        
        </tr>
      </tbody>
      {/* have to pass an anonymous function to contain a function so the function defined doesn't run until it is supposed to - basically hiding the filterArray until the user clicks on the remove button */}
          </>
  );
}

export default TeacherTable;