import { Carousel } from "react-bootstrap"
import React from "react"
import scholarshipWinners from "../images/concert-winners.jpg"
import festivalStudents from "../images/festival-winners.jpg"
import scholarshipTable from "../images/scholarship-table.jpg"
import "../index.css"



function Festival() {

  return (
    <>
  <div className="container-fluid">
  

  <h1 className="display-3">DEMTA Festival</h1>
  <div className="about-text">
  <div className="col-lg-12 col-md-12 col-sm-12">
  <div className="festival-carousel row">
      <div className="festival-image col-4">
      <img src={scholarshipWinners} alt="scholarship winners"/><p>Congratulations to the 2015 Honors Concert winners!</p>
      </div>
      <div className="festival-image col-4">
      <img src={festivalStudents} alt="festival students"/><p>A few scholarship winners!</p>
      </div>
      <div className="festival-image col-4">
      <img src={scholarshipTable} alt="scholarship table"/><p>The beautiful display of the 2015 scholarship winners!</p>
      </div>
</div> 
<br></br>
<p className="text-alert">** Due to the Covid-19 Pandemic our Festival will be virtual this year.  Details to follow. **</p>

<p className="festival-text">DEMTA's Spring Festival will take place in April, our <strong>25th festival! </strong> This celebration of music is usually one of the largest in Colorado with over 300 students participating.  Students will perform for judges and take theory tests.  Each student will receive a certificate of participation and be awarded either ribbons, trophies and/or medals.  Students who receive top honors will perform in Honor's Concerts, held at Parker Bible Church on Saturday the week after Festival. </p> 
<p className="festival-text">(Note:  New teachers who wish to participate in the Festival must join DEMTA by January 31st.)</p>


<h3 className="festival-contact">All questions about festival should be directed to <a href="mailto:DEMTA2017@gmail.com">DEMTA2017@gmail.com</a>.</h3>

  </div>
</div>

</div>
    </>
  )
}

export default Festival