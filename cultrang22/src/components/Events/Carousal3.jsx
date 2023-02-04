import Carousel from "react-elastic-carousel";
import React from 'react'
import "./events.css"

export default function Carousal3() {
  return (
      <Carousel>
            <div className="Events-rect">
                <img src="assets/1.jpeg"  /> 
                <p className="legend">Event 1</p>
            </div>
            <div className="Events-rect">
                <img src="assets/2.jpeg" />  
                <p className="legend">Event 2</p>
            </div>
            <div className="Events-rect">
                <img src="assets/3.jpeg" />
                <p className="legend">Event 3</p>
            </div>
        </Carousel>
  )
}
