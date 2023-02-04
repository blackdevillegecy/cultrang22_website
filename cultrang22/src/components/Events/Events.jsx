import React from "react";
import "./events.css"
import Carousal1 from "./Carousal1"
import Carousal2 from "./Carousal2";
import Carousal3 from "./Carousal3";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Events () {
    return (
        <>
        <div className="Events-title">EVENTS</div>
        <div className="Events-section1"><div>Section 1</div></div>
        <Carousal1/>
        <div className="Events-section2"><div>Section 2</div></div>
        <Carousal2/>
        <div className="Events-section3"><div>Section 3</div></div>
        <Carousal3/>
        <div className="Events-social-media">
                <div><TwitterIcon sx={{fontSize: '30px'}} /></div>
                <div><FacebookIcon sx={{fontSize: '30px'}} /></div>
                <div><InstagramIcon sx={{fontSize: '30px'}} /></div>
        </div>    
        </> 
    );
}