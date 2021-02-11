import React from "react"
import "./header.css"
import banner from "../../images/Banner.jpg"

function Header() {
  return(
    <>
    <div className="container-fluid">
    <div className="header row">
      <div className="col-2"></div>
      <img className="demta-banner col-8" width={1000} src={banner} alt="demta banner"></img>
      <div className="col-2"></div>
    </div>
    </div>
    </>
  )
}

export default Header