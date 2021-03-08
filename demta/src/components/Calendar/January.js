import {React, useState} from "react"
import "./calendar.css"
import {Table, Modal, Button} from "react-bootstrap"

function January() {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return(
    <>
    <div className="container-fluid">
      <h2 className="month">January 2021</h2>
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
          <td ></td>
          <td ></td>
          <td ></td>
          <td ></td>
          <td ></td>
          <td >1</td>
          <td >2</td>
        </tr>
        <tr>
          <td >3</td>
          <td >4</td>
          <td >5</td>
          <td >6</td>
          <td >7</td>
          <td >8</td>
          <td >9</td>
        </tr>
        <tr>
          <td >10
          <p className="event-what"><strong>Recital Entry Deadline</strong><br></br>(1/23)</p>
          </td>
          <td >11</td>
          <td >12</td>
          <td >13</td>
          <td >14
          <p className="event-what"><strong>General Membership Meeting</strong></p><div className="event-when">9:00 am</div><div className="event-where">Parker Bible Church</div>
          </td>
          <td >15</td>
          <td >16</td>
        </tr>
        <tr>
          <td >17</td>
          <td >18</td>
          <td >19</td>
          <td >20</td>
          <td >21</td>
          <td >22</td>
          <td >23
          <p className="event-what"><strong>DEMTA Ensemble Recital</strong></p><div className="event-when">12:30pm, 2:00pm, 3:30pm and 5:00pm</div><div className="event-where">Parker Bible Church</div>
          </td>
        </tr>
        <tr>
          <td >24</td>
          <td >25</td>
          <td >26</td>
          <td >27</td>
          <td >28</td>
          <td >29</td>
          <td >30</td>
        </tr>
        <tr>
          <td >31</td>
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

export default January