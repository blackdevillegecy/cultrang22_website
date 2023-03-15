import React from "react";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import "./music.css"
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

export default function Music() {
    return (
        <>
        <br />
            <Link to="/~cultrang"><ArrowBackIcon style={{marginLeft: '15px'}}/></Link>
            <br />
        <div className="Event-Music" >
            <Carousel breakPoints={breakPoints} enableSwipe={true} enableMouseSwipe={true} >
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053873/cultrang%2723/Poster_symphony_herjr9.png" registration="https://forms.gle/W8HcHiGHwE1DizQt7" rulebook="https://drive.google.com/file/d/1-N6dYXGTW6m-qRCMaUBx_dfNagrG9rxu/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053869/cultrang%2723/Poster_cascading_amps_fnbvrs.png" registration="https://forms.gle/teUisrijbpWtkrb79" rulebook="https://drive.google.com/file/d/1-OUpzROWGZYbXRO3qDEXG3GVYuMdKNhT/view"></Item>
        </Carousel>
        </div></>
    );
}