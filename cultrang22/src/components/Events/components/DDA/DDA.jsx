import React from "react";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import "./dda.css"
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

export default function DDA() {
    return (
        <>
        <br />
            <Link to="/~cultrang"><ArrowBackIcon style={{marginLeft: '15px'}}/></Link>
            <br />
        <div className="Event-DDA" >
            <Carousel breakPoints={breakPoints} enableSwipe={true} enableMouseSwipe={true} >
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053869/cultrang%2723/Poster_Cultrang_flash_qbwrox.png" registration="https://forms.gle/Xv2dvXuyHUNcgxsY7" rulebook="https://drive.google.com/file/d/10i3Xl0UvXEiczBCi7iuwO3RtpsVUtDy1/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053869/cultrang%2723/Poster_cultrang_in_minutes_aebw2q.png" registration="https://forms.gle/bB5ci6EXEppWVdpS7" rulebook="https://drive.google.com/file/d/10ciNO38vHY_pJGNgL4VNvYVOA5r1E2_5/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677673580/cultrang%2723/Digital_ad_astra_unhtwd.png" registration="https://forms.gle/4yw8CnCwHsnW8RXK6" rulebook="https://drive.google.com/file/d/10YSkiepZcz84YYWqytbWOiF4rTJuQxJG/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677673581/cultrang%2723/Digital_design_comb_yooovl.png" registration="https://forms.gle/fPq5bPD3KNKspvis6" rulebook="https://drive.google.com/file/d/10i77gT47UbVwT4aJh9uqnbO5CdS_oxDR/view"></Item>
        </Carousel>
        </div></>
    );
}