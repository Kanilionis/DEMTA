import {React, useState} from "react"
import "./calendar.css"
import {Table, Modal, Button} from "react-bootstrap"

function June() {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return(
    <>
    <div className="container-fluid">
      <h2 className="month">June 2021</h2>
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
          <td >1</td>
          <td >2</td>
          <td >3</td>
          <td >4</td>
          <td >5
          <p className="event-what"><strong>DEMTA Ensemble Recital</strong></p><div className="event-when"></div><div className="event-where">Parker Bible Church</div>
          </td>
        </tr>
        <tr>
          <td >6</td>
          <td >7</td>
          <td >8</td>
          <td >9</td>
          <td >10</td>
          <td >11</td>
          <td >12</td>
        </tr>
        <tr>
          <td >13</td>
          <td >14</td>
          <td >15</td>
          <td >16</td>
          <td >17</td>
          <td >18</td>
          <td >19</td>
        </tr>
        <tr>
          <td >20</td>
          <td >21</td>
          <td >22</td>
          <td >23</td>
          <td >24</td>
          <td >25</td>
          <td >26</td>
        </tr>
        <tr>
          <td >27</td>
          <td >28</td>
          <td >29</td>
          <td >30</td>
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

export default June