import React from "react";
import "./home.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Home () {
    return (
        <div className="Home">
            <div className="Home-logo"><img src="https://res.cloudinary.com/dwjesc65k/image/upload/v1674363032/cultrang%2723/logo_dnscey.png" alt="" /></div>
            <div className="Home-text">PLAY|PAUSE|REWIND</div>
            <div className="Home-CA"><div>CA Portal</div></div>
            <div className="Home-social-media">
                <div><TwitterIcon sx={{fontSize: '30px'}} /></div>
                <div><FacebookIcon sx={{fontSize: '30px'}} /></div>
                <div><InstagramIcon sx={{fontSize: '30px'}} /></div>
            </div>
        </div>
    );
}