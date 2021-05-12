import React from "react"
import Calendar from "../components/Calendar/Calendar"
import "../index.css"

function Events() {
  return (
    <>
    <div className="container-fluid">
      <div className="home jumbotron-fluid">
  

    <h1 className="display-3">DEMTA Events</h1>

    <p className="text-home">SUBJECT TO CHANGE!<br></br>Additional Date and Events Will Be Added As They Are Scheduled</p>
    <Calendar/>
  </div>
</div>
    </>
  )
}

export default Events