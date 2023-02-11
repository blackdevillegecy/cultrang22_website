import React from "react";
import "./events.css"
import Carousal1 from "./Carousal1"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";

export default function Events () {
    return (
        <div className="Events" id="events" >
        <div className="Events-title">events / సంఘటనలు</div>
        <Carousal1/>
        <div className="Events-social-media">
                <Link to="https://in.linkedin.com/company/cultrang"><div><LinkedInIcon sx={{fontSize: '30px'}} /></div></Link>
                <Link to="https://www.instagram.com/cultrangiitgoa/?hl=en"><div><InstagramIcon sx={{fontSize: '30px'}} /></div></Link>
                <div><YouTubeIcon sx={{fontSize: '30px'}} /></div>
        </div>    
        </div> 
    );
}