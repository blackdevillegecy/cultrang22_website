import React from "react";
import "./contact.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Contact () {
    return (
        <div className="Contact">
            <div className="grp_46">Contact us</div>
            <div className="divyanshi">Divyanshi Govil</div>
            <div className="jay_jawale">Jay Jawale</div>
            <div className="divyanshi_number">9407881499</div>
            <div className="jay_jawale_number">9579608314</div>
            <div className="divyanshi_email">divyanshi.govil.20031@iitgoa.ac.in</div>
            <div className="jay_jawale_email">jay.jawale.21063@iitgoa.ac.in</div>
            <div className="Contact-social-media">
                <div><TwitterIcon sx={{fontSize: '30px'}} /></div>
                <div><FacebookIcon sx={{fontSize: '30px'}} /></div>
                <div><InstagramIcon sx={{fontSize: '30px'}} /></div>
            </div>   
        </div>
    );
}