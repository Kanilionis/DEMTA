import React from "react"
import Footer from "../components/Footer/Footer"
import Links from "../components/Links/Links"

function Home() {
  return (
    <>
    <Links/>
  <div className="welcome">
    <h2>WELCOME! </h2>
    <h3>DEMTA was named "Local Association Of The Year" at the 2017 CSMTA convention.   </h3>
      
    <p>DEMTA members are independent and school music teachers who work in Parker, Castle Rock, Elizabeth, Centennial, Highlands Ranch, Littleton and Aurora. We have been providing students with exceptional local music education, enriching the community through public service performances and providing teacher development since 1994. In 2014-2015 we celebrated our 20th year of music enjoyment, education and excellence in our community!</p>


    <p>If you are looking for a private music teacher for your child or yourself - Douglas-Elbert Music Teachers Association is an excellent place to look!  DEMTA has many excellent teachers representing all disciplines including piano, strings, woodwinds, voice, guitar, composition and more.  Please contact us for a referral or look at our teacher listing. </p>

    <p>We invite you to browse our site to learn more about who we are, membership and benefits, and our wonderful Mason & Hamlin grand piano!</p>

    <p>New members who wish to participate in Festival must join DEMTA by January 31st.</p>

  </div>
<Footer/>
    </>
  )
}

export default Home