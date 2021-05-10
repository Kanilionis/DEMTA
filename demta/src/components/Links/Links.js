import React from "react"
import { Button, ButtonGroup } from "react-bootstrap"
import "./links.css"
import logo from "../../images/DEMTA-LOGO-BLUE.jpg"


function Links() {

  return(
    <>
    
    
    <div className="links col-sm-12 col-md-2 col-lg-2">
    <div className="logo-img " >
    <img height="200" src={logo} alt="logo"/>
    </div>
      <form className="paypal" action="https://www.paypal.com/donate" method="post" target="_blank">
  <input type="hidden" name="hosted_button_id" value="LSBGV5C3XLMKS" />
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
  <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
  
  </form>
  <div className="hidden">
      <h3 className="links-title">HELPFUL LINKS</h3>
      <ButtonGroup className="link-buttons" vertical>
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
  </div>
    </>
  )
}


export default Links






