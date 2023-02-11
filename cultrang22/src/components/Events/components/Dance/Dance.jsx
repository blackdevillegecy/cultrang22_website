import React from "react";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import "./dance.css"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];



export default function Dance() {
    return (
        <div className="Event-Dance" >
            <Carousel breakPoints={breakPoints} enableSwipe={true} enableMouseSwipe={true} >
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053868/cultrang%2723/Poster_battle_of_feet_bxchh7.png" registration="https://forms.gle/BeCVZQzjdk4uxEUa8" rulebook="https://drive.google.com/file/d/1-RNqB6x8-lLvEU8mKtcRoFWlSDZ7ZCl_/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053871/cultrang%2723/Poster_footloose_anl0qa.png" registration="https://forms.gle/YMX6QrQx44TEi1bb9" rulebook="https://drive.google.com/file/d/1-gtACmxCX-LaAjDSdIfyC85O7qzeKJkj/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053871/cultrang%2723/Poster_Groove_It_x9gx9h.png" registration="https://forms.gle/H6Z6HYVwhsKRUDbMA" rulebook="https://drive.google.com/file/d/1-aJAert7mWbmECVnPyPxOPLOc-SIYhzL/view"></Item>
        </Carousel>
        </div>
    );
}