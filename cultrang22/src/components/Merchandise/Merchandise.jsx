import React from "react";
import "./merchandise.css";
import Carousel from "react-elastic-carousel";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-router-dom";


export default function Merchandise () {
    return (
        <div className="Merchandise" id="merchandise">
            <div className="Merchandise-heading">merchandise / ಸರಕು</div>
            <div className="Merchandise-items">
            <span>Coming Soon</span>
            </div>
            <div className="Merchandise-social-media">
                <Link to="https://in.linkedin.com/company/cultrang"><div><LinkedInIcon sx={{fontSize: '30px'}} /></div></Link>
                <Link to="https://www.instagram.com/cultrangiitgoa/?hl=en"><div><InstagramIcon sx={{fontSize: '30px'}} /></div></Link>
                <div><YouTubeIcon sx={{fontSize: '30px'}} /></div>
            </div>
        </div>
    );
}