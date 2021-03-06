import {React, useState} from "react"
import "./calendar.css"
import {Table, Modal, Button} from "react-bootstrap"

function May() {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return(
    <>
    <div className="container-fluid">
      <h2 className="month">May 2021</h2>
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
          <td ></td>
          <td >1</td>
        </tr>
        <tr>
          <td >2</td>
          <td >3</td>
          <td >4</td>
          <td >5</td>
          <td >6
          <p className="event-what"><strong>General Membership Meeting</strong></p><div className="event-when">9:00 am</div><div className="event-where">Parker Bible Church/Zoom</div>
          </td>
          <td >7</td>
          <td >8</td>
        </tr>
        <tr>
          <td >9</td>
          <td >10</td>
          <td >11</td>
          <td >12</td>
          <td >13</td>
          <td >14</td>
          <td >15</td>
        </tr>
        <tr>
          <td >16</td>
          <td >17</td>
          <td >18</td>
          <td >19</td>
          <td >20</td>
          <td >21</td>
          <td >22</td>
        </tr>
        <tr>
          <td >23</td>
          <td >24</td>
          <td >25</td>
          <td >26</td>
          <td >27</td>
          <td >28</td>
          <td >29</td>
        </tr>
        <tr>
          <td >30</td>
          <td >31</td>
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

export default May