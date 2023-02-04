import React from "react";
import "./merchandise.css";
import Carousel from "react-elastic-carousel";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Merchandise () {
    return (
        <div className="Merchandise">
            <div className="Merchandise-heading">merchandise</div>
            <div className="Merchandise-items">
                <div><img src="https://res.cloudinary.com/dwjesc65k/image/upload/v1675494177/cultrang%2723/merch3_jisisn.jpg" alt="" /></div>
                <div><img src="https://res.cloudinary.com/dwjesc65k/image/upload/v1675494177/cultrang%2723/merch3_jisisn.jpg" alt="" /></div>
                <div><img src="https://res.cloudinary.com/dwjesc65k/image/upload/v1675494177/cultrang%2723/merch3_jisisn.jpg" alt="" /></div>
            </div>
        </div>
    );
}