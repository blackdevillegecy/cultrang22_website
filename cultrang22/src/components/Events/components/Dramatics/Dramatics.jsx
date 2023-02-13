import React from "react";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import "./dramatics.css"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

export default function Dramatics() {
    return (
        <div className="Event-Dramatics" >
            <Carousel breakPoints={breakPoints} enableSwipe={true} enableMouseSwipe={true} >
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676287366/Poster_tamasha_nfj6nf.png" registration="https://forms.gle/ocBzacJrPcQGracJ8" rulebook="https://drive.google.com/file/d/1-kr3_jsS5p0zWUnVx8R1mr0NkGLGVkn4/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053871/cultrang%2723/Poster_nat_samraat_anv0ps.png" registration="https://forms.gle/uxxEC8hKgQxayDjg7" rulebook="https://drive.google.com/file/d/1-hDY3R0AisoRPDZoUSbp8ZJrJnS6ajzt/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053872/cultrang%2723/Poster_rangmanch_iihusf.png" registration="https://forms.gle/1JGLZBEuJvQm7xbUA" rulebook="https://drive.google.com/file/d/1-owoFRT97NEdcbda99XA7JtwWNZ0VmBI/view"></Item>
        </Carousel>
        </div>
    );
}