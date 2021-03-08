import {React, useState} from "react"
import "./calendar.css"
import {Table, Modal, Button, Carousel} from "react-bootstrap"
import January from "./January"
import February from "./February"
import March from "./March"
import April from "./April"
import May from "./May"
import June from "./June"
import July from "./July"
import August from "./August"
import September from "./September"
import October from "./October"
import November from "./November"
import December from "./December"

function Calendar() {

  
  return(
    <>
    <div className="container-fluid">
    <Carousel controls={true} indicators={false} interval={null} className="calendar-grid col-lg-9 col-md-9 col-sm-12">
        <Carousel.Item>
        <January/>
        </Carousel.Item>
        <Carousel.Item>
        <February/>
        </Carousel.Item>
        <Carousel.Item>
        <March/>
        </Carousel.Item>
        <Carousel.Item>
        <April/>
        </Carousel.Item>
        <Carousel.Item>
        <May/>
        </Carousel.Item>
        <Carousel.Item>
        <June/>
        </Carousel.Item>
        <Carousel.Item>
        <July/>
        </Carousel.Item>
        <Carousel.Item>
        <August/>
        </Carousel.Item>
        <Carousel.Item>
        <September/>
        </Carousel.Item>
        <Carousel.Item>
        <October/>
        </Carousel.Item>
        <Carousel.Item>
        <November/>
        </Carousel.Item>
        <Carousel.Item>
        <December/>
        </Carousel.Item>
        
    </Carousel>
       
     
    
      </div>
    </>
  )
}

export default Calendar