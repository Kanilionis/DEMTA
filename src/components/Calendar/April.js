import {React, useState} from "react"
import "./calendar.css"
import {Table, Modal, Button} from "react-bootstrap"

function April() {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return(
    <>
    <div className="container-fluid">
      <h2 className="month">April 2021</h2>
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
          <td >1
          <p className="event-what"><strong>General Membership Meeting</strong></p><div className="event-when">9:00 am</div><div className="event-where">Parker Bible Church</div>
          </td>
          <td >2</td>
          <td >3</td>
        </tr>
        <tr>
          <td >4</td>
          <td >5</td>
          <td >6</td>
          <td >7</td>
          <td >8
          <p className="event-what"><strong>DEMTA Festival video submission deadline</strong></p><div className="event-where">*see festival handbook for more info</div>
          
          </td>
          <td >9</td>
          <td >10</td>
        </tr>
        <tr>
          <td >11</td>
          <td >12</td>
          <td >13</td>
          <td >14
          <p className="event-what"><strong>CC</strong></p><div className="event-where">Shalom Park</div><div className="event-when">*deadline for entries 4/7</div>
          </td>
          <td >15</td>
          <td >16
          <p className="event-what"><strong>DEMTA Young Artist Recital</strong></p><div className="event-when">6:00 and 7:15pm</div><div className="event-where">Parker Bible Church</div>
          </td>
          <td >17</td>
        </tr>
        <tr>
          <td >18</td>
          <td >19</td>
          <td >20</td>
          <td >21</td>
          <td >22</td>
          <td >23</td>
          <td >24
          <p className="event-what"><strong>DEMTA Honors Concerts</strong></p><div className="event-when"></div><div className="event-where">Parker Bible Church</div>
          </td>
        </tr>
        <tr>
          <td >25</td>
          <td >26</td>
          <td >27</td>
          <td >28
          <p className="event-what"><strong>CC at Shalom Park</strong></p><div className="event-when"></div><div className="event-where">*deadline for entries 4/21</div>
          </td>
          <td >29</td>
          <td >30</td>
          <td ></td>
        </tr>
       
      </tbody>   
      </Table>
      </div>
    </>
  )
}

export default April