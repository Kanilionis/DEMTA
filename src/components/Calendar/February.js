import {React, useState} from "react"
import "./calendar.css"
import {Table, Modal, Button} from "react-bootstrap"

function February() {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return(
    <>
    <div className="container-fluid">
      <h2 className="month">February 2021</h2>
    <Table border>
    
      <thead>
        <tr>
          <th >Sun</th>
          <th >Mon</th>
          <th >Tues</th>
          <th >Wed</th>
          <th >Thurs</th>
          <th >Fri</th>
          <th >Sat</th>
        </tr>
      </thead>   
      <tbody>
      <tr>
          <td >1</td>
          <td >1</td>
          <td >2</td>
          <td >3</td>
          <td >4
          <p className="event-what"><strong>General Membership Meeting</strong></p><div className="event-when">9:00 am</div><div className="event-where">Parker Bible Church</div>
          </td>
          <td >5</td>
          <td >6</td>
        </tr>
        <tr>
          <td >7</td>
          <td >8</td>
          <td >9</td>
          <td >10</td>
          <td >11</td>
          <td >12</td>
          <td >13</td>
        </tr>
        <tr>
          <td >14
          <p className="event-what"><strong>Recital Entry Deadline</strong><br></br>(2/27)</p>
          </td>
          <td >15</td>
          <td >16</td>
          <td >17</td>
          <td >18</td>
          <td >19</td>
          <td >20</td>
        </tr>
        <tr>
          <td >21</td>
          <td >22</td>
          <td >23</td>
          <td >24</td>
          <td >25</td>
          <td >26
          <p className="event-what"><strong>DEMTA Young Artist Recital</strong></p><div className="event-when">6:00pm and 7:15pm</div><div className="event-where">Parker Bible Church</div>
          </td>
          <td >27
          <p className="event-what"><strong>DEMTA Recital</strong></p>
          <div className="event-when">2:00pm, 3:00pm, 5:00pm</div>
          <div className="event-where">Parker Bible Church</div>
          </td>
        </tr>
        <tr>
          <td >28</td>
          <td ></td>
          <td ></td>
          <td ></td>
          <td ></td>
          <td ></td>
          <td ></td>
        </tr>
       
      </tbody>   
      </Table>
      </div>
    </>
  )
}

export default February