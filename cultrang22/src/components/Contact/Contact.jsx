import React from "react";
import "./contact.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";

export default function Contact () {
    return (
        <div className="Contact" id="contact">
            <div className="Contact-heading">contact us / যোগাযোগ করুন</div>
            <div className="Contact-names">
                <div>
                    <div>Divyanshi Govil</div>
                    <br />
                    <div>9407881499</div>
                    <div>divyanshi.govil.20031@iitgoa.ac.in</div>
                </div>
                <div>
                    <div>Aryan Tomar</div>
                    <br />
                    <div>78440010196</div>
                    <div>aryan.tomar.20031@iitgoa.ac.in</div>
                </div>
            </div>
            <div className="Contact-social-media">
                <Link to="https://in.linkedin.com/company/cultrang"><div><LinkedInIcon sx={{fontSize: '30px'}} /></div></Link>
                <Link to="https://www.instagram.com/cultrangiitgoa/?hl=en"><div><InstagramIcon sx={{fontSize: '30px'}} /></div></Link>
                <div><YouTubeIcon sx={{fontSize: '30px'}} /></div>
            </div>   
        </div>
    );
}