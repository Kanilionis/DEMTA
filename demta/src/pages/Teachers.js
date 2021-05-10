import React, { useState } from "react"
import teachers from "../teachers.json"
import TeacherTable from "../components/Teachers/TeacherTable"
import "../index.css"

class Teachers extends React.Component {

 state = {
   teachers: teachers,
   sorted: teachers
 };

  sortName = () => {
    const newTeachersArray = this.state.teachers.slice(0)
    const sortedArray = newTeachersArray.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({sorted: sortedArray});
    console.log(sortedArray)
  };
  sortSubject = () => {
    const newTeachersArray = this.state.teachers.slice(0)
    const sortedArray = newTeachersArray.sort((a, b) => a.subject.localeCompare(b.name))
    this.setState({sorted: sortedArray});
    console.log(sortedArray)
  };
  sortCity = () => {
    const newTeachersArray = this.state.teachers.slice(0)
    const sortedArray = newTeachersArray.sort((a, b) => a.city.localeCompare(b.city))
    this.setState({sorted: sortedArray})
    console.log(sortedArray)
  };
  sortNeighborhood = () => {
    const newTeachersArray = this.state.teachers.slice(0)
    const sortedArray = newTeachersArray.sort((a, b) => a.neighborhood.localeCompare(b.neighborhood))
    this.setState({sorted: sortedArray})
  }
  render(){

  
  return (
    <>
    <div className="container-fluid">
      <div className="home jumbotron-fluid">
  

    <h1 className="display-3">Teachers</h1>
    <table >
      <thead>
        <th scope="col-2" className="sort" onClick={this.sortName}>Name</th>
        <th scope="col-2" className="sort" onClick={this.sortSubject}>Subject</th>
        <th scope="col-2" className="sort" >Level</th>
        <th scope="col-2" className="sort" onClick={this.sortCity}>City</th>
        <th scope="col-2" className="sort" onClick={this.sortNeighborhood}>Neighborhood</th>
        <th scope="col-2" className="sort" >Contact</th>
      </thead>
      {this.state.sorted.map(teacher => (
        <TeacherTable key={teacher.name} {...teacher} />
      ))}
    </table>
  </div>
</div>
    </>
  )
}
}

export default Teachers