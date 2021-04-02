import React from "react"
import "../Forms/forms.css"
import { Button, ButtonGroup } from "react-bootstrap"
import FestivalHandbook from "../../images/2021 Festival handbook.pdf"
import VirtualFestivalForm from "../../images/2021 Virtual Festival Forms 2021.pdf"
import ScholarshipApplication from "../../images/APPLICATION FOR THE DEMTA SCHOLARSHIP revised 2013.pdf"
import ScholarshipRequirements from "../../images/DEMTAscholarship2015.pdf"
import Bylaws from "../../images/DEMTA Constitution and Bylaws.pdf"
import MembershipApp from "../../images/DEMTA membership application 2017.pdf"
import RecitalPolicy from "../../images/DEMTA Recital Policy 2017.pdf"
import TeacherInstructions from "../../images/DEMTA Recital Teacher Instructions 2017.pdf"
import PhotoAuth from "../../images/DEMTA_PhotoVideo_Authorization.pdf"
import NewRecitalGuidelines from "../../images/new recital guidelines.pdf"
import VolunteerReimbursement from "../../images/Volunteer Reimbursement.pdf"

function DEMTAForms() {
  return (
   <>
   <ButtonGroup className="form-group" vertical>
  <Button className="form-button" variant="outline-dark" target="_blank" href={FestivalHandbook}>Festival Handbook</Button>
  <br/>
  <Button className="form-button" variant="outline-dark" target="_blank" href={VirtualFestivalForm}>Virtual Festival Form</Button>
  <br/>
  <Button className="form-button" variant="outline-dark" target="_blank" href={ScholarshipApplication}>Scholarship Application</Button>
  <br/>
  <Button className="form-button" variant="outline-dark" target="_blank" href={ScholarshipRequirements}>DEMTA Scholarship Application Requirements</Button>
  <br/>
  <Button className="form-button" variant="outline-dark" target="_blank" href={Bylaws}>DEMTA Constitution and Bylaws</Button>
  <br/>
  <Button className="form-button" variant="outline-dark" target="_blank" href={MembershipApp}>Membership Application</Button>
  <br/>
  <Button className="form-button" variant="outline-dark" target="_blank" href={RecitalPolicy}>Recital Policy</Button>
  <br/>
  <Button className="form-button" variant="outline-dark" target="_blank" href={TeacherInstructions}>Recital Teacher Instructions</Button>
  <br/>
  <Button className="form-button" variant="outline-dark" target="_blank" href={PhotoAuth}>Photo/Video Authorization</Button>
  <br/>
  <Button className="form-button" variant="outline-dark" target="_blank" href={NewRecitalGuidelines}>New Recital Guidelines</Button>
  <br/>
  <Button className="form-button" variant="outline-dark" target="_blank" href={VolunteerReimbursement}>Volunteer Reimbursement</Button>
  </ButtonGroup>
   </>
  )
}

export default DEMTAForms