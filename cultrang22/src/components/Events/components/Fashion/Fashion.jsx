import React from "react";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import "./fashion.css"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

export default function Fashion() {
    return (
        <div className="Event-Fashion" >
            <Carousel breakPoints={breakPoints} enableSwipe={true} enableMouseSwipe={true} >
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1675543613/cultrang%2723/event-poster_fb686j.webp" registration="https://forms.gle/qiNzV8u4GsX3FcvX9" rulebook="https://drive.google.com/file/d/10iFxnk_GBPRTyzZTtbQYNgnlWIQVZXr7/view"></Item>
        </Carousel>
        </div>
    );
}