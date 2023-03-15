import React from "react";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import "./fashion.css"
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

export default function Fashion() {
    return (
        <>
        <br />
            <Link to="/~cultrang"><ArrowBackIcon style={{marginLeft: '15px'}}/></Link>
            <br />
        <div className="Event-Fashion" >
            <Carousel breakPoints={breakPoints} enableSwipe={true} enableMouseSwipe={true} >
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676287365/Poster_Mr_Ms_Cultrang_ynohgs.png" registration="https://forms.gle/qiNzV8u4GsX3FcvX9" rulebook="https://drive.google.com/file/d/10iFxnk_GBPRTyzZTtbQYNgnlWIQVZXr7/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676320867/cultrang%2723/Poster_Cultrun_nciecd.png" registration="https://forms.gle/rhzu5Djv3iE3arWc7" rulebook=""></Item>
        </Carousel>
        </div></>
    );
}