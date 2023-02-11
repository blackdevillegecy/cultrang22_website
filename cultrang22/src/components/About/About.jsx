import React from "react";
import "./about.css"
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";

export default function About () {
    return (
        <div className="About" id="about">
            
            <div className="About-title">about / के बारे में</div>
            <div className="About-MoonPhasePic"><img src="https://res.cloudinary.com/dalnjv5uu/image/upload/v1675501526/samples/CultrangWeb23/The_Best_Zodiac_Astrology_Wallpaper_For_Your_iPhone___Tea_Rosemary_rwzxye.png"></img></div>
            <div className="About-Text1">Cultrang is a celebration of cultures, not just as an institution, but as a country. It aims at instilling a sense of belongingness by being a melting pot of ideas open to students of all disciplines. With intriguing events and competitions along with resourceful workshops by experts and professionals Cultrang ‘23 is all set to be an enthralling experience for everyone involved.</div>
            <div className="About-EarthPic"><img src="https://res.cloudinary.com/dwjesc65k/image/upload/v1676058821/cultrang%2723/earth-22_aa28ce.png"></img></div>
            <div className="About-PPR"><img src="https://res.cloudinary.com/dwjesc65k/image/upload/v1675537130/cultrang%2723/play-pause-rewind_bm1jij.png" alt="" /></div>
            <div className="About-Text1">The theme of Cultrang this year is 'A Time Peregrination'. This three-day fest guarantees a wholesome journey through time as we explore the evolution of our diverse art, music and dance culture over the years. <br /><br />It's time to pause our busy schedules and dive into the good vibes of Cultrang'23! Let's hit the play button and indulge in the present moment of celebration. With all the mesmerising cultural richness from the recent past few decades, CultRang'23 would leave no stone unturned in helping us rewind – and switch to the vivid time zones of traditional art forms and timeless film classics through the multitude of opportunities presented here. This way, we may begin to appreciate how these works of art have evolved and mixed with international colour to give us the uniquely globalised style that is so in vogue today.</div>
            <div className="About-social-media">
                <Link to="https://in.linkedin.com/company/cultrang"><div><LinkedInIcon sx={{fontSize: '30px'}} /></div></Link>
                <Link to="https://www.instagram.com/cultrangiitgoa/?hl=en"><div><InstagramIcon sx={{fontSize: '30px'}} /></div></Link>
                <div><YouTubeIcon sx={{fontSize: '30px'}} /></div>
            </div>
        </div>
    );
}