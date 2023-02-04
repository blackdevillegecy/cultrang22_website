import React from "react";
import "./about.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function About () {
    return (
        <div className="About">
            <div className="About-title">About/के बारे में</div>
            <div className="About-MoonPhasePic"><img src="https://res.cloudinary.com/dalnjv5uu/image/upload/v1675501526/samples/CultrangWeb23/The_Best_Zodiac_Astrology_Wallpaper_For_Your_iPhone___Tea_Rosemary_rwzxye.png"></img></div>
            <div className="About-Text1">Cultrang is a celebration of cultures, not just as an institution, but as a country. It aims at instilling a sense of belongingness by being a melting pot of ideas open to students of all disciplines. With intriguing events and competitions along with resourceful workshops by experts and professionals Cultrang ‘23 is all set to be an enthralling experience for everyone involved.</div>
            <div className="About-EarthPic"><img src="https://res.cloudinary.com/dalnjv5uu/image/upload/v1675501529/samples/CultrangWeb23/earthAsset_2pink_mlrmpa.png"></img></div>
            <div className="About-PPR"></div>
            <div className="About-Text1">The theme of Cultrang this year is 'A Time Peregrination'. This three-day fest guarantees a wholesome journey through time as we explore the evolution of our diverse art, music and dance culture over the years. It's time to pause our busy schedules and dive into the good vibes of Cultrang'23! Let's hit the play button and indulge in the present moment of celebration. With all the mesmerising cultural richness from the recent past few decades, CultRang'23 would leave no stone unturned in helping us rewind – and switch to the vivid time zones of traditional art forms and timeless film classics through the multitude of opportunities presented here. This way, we may begin to appreciate how these works of art have evolved and mixed with international colour to give us the uniquely globalised style that is so in vogue today.</div>
            <div className="About-social-media">
                <div><TwitterIcon sx={{fontSize: '30px'}} /></div>
                <div><FacebookIcon sx={{fontSize: '30px'}} /></div>
                <div><InstagramIcon sx={{fontSize: '30px'}} /></div>
            </div>
        </div>
    );
}