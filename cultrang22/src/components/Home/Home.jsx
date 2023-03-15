import React from "react";
import "./home.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";

export default function Home () {
    return (
        <div className="Home" id="home">
            <div className="Home-logo"><img src="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053926/cultrang%2723/final_logo-06_h8neoj.png" alt="" /></div>
            {/* <div className="Home-text">PLAY|PAUSE|REWIND</div> */}
            <Link to="https://forms.gle/6phvmJB1GpxQHU5R8"><div className="Home-Accomodation"><div>Accomodation</div></div></Link>
            <Link to="https://forms.gle/shpxwvhVZp8nsaT58"><div className="Home-CA"><div>CA Portal</div></div></Link>
            <Link to="https://www.townscript.com/e/iit-goas-cultrang23-043233"> <div className="Home-Passes"><div>Passes</div></div></Link>
            <Link to="http://Imojo.in/ciitg"> <div className="Home-CA"><div>Workshop</div></div></Link>
            <div className="Home-social-media">
                <Link to="https://in.linkedin.com/company/cultrang"><div><LinkedInIcon sx={{fontSize: '30px'}} /></div></Link>
                <Link to="https://www.instagram.com/cultrangiitgoa/?hl=en"><div><InstagramIcon sx={{fontSize: '30px'}} /></div></Link>
                <Link to="https://www.youtube.com/watch?v=ciJZMCwiPrA"><div><YouTubeIcon sx={{fontSize: '30px'}} /></div></Link>
            </div>
        </div>
    );
}