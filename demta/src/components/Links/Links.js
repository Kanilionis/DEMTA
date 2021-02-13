import React from "react"
import { Button, ButtonGroup } from "react-bootstrap"
import "./links.css"
import logo from "../../images/DEMTA-LOGO-BLUE.jpg"


function Links() {

  return(
    <>
    <div className="links col-sm-12 col-md-2 col-lg-2">
      <img height="200" src={logo} alt="logo"/>
      <h3 className="links-title">HELPFUL LINKS</h3>
      <ButtonGroup vertical>
  <Button variant="outline-dark" target="_blank" href="https://www.comusicteachers.net/">CMTA</Button>
  <br/>
  <Button variant="outline-dark" target="_blank" href="http://www.facebook.com/search/top/?q=douglas%20elbert%20music%20teachers%20association">DEMTA Facebook Page</Button>
  <br/>
  <Button variant="outline-dark" target="_blank" href="http://mtna.org/">MTNA</Button>
  <br/>
  <Button variant="outline-dark" target="_blank" href="http://smile.amazon.com/ch/84-1472720">Amazon Smile</Button>
  <br/>
  <Button variant="outline-dark" target="_blank" href="https://forms.gle/Tmx4BaimTKNsuVjf9">Performance Award</Button>
  <br/>
  <Button variant="outline-dark" target="_blank" href="https://douglaselbertmta.regfox.com/demta-recital-from-back-to-rock">Recital Registration</Button>
  <br/>
  <Button variant="outline-dark" target="_blank" href="https://douglaselbertmta.regfox.com/2021-young-artist-recital-feb-26">YAR Recital Registration</Button>
  </ButtonGroup>
  </div>
    </>
  )
}


export default Links






