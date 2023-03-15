import Carousel from "react-elastic-carousel";
import React from 'react'
import Item from "./Item";
import { Link } from "react-router-dom";
import "./item.css"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

export default function Carousal() {
    return (
        <Carousel breakPoints={breakPoints} enableSwipe={true} enableMouseSwipe={true}>
              <Link to="https://forms.gle/hN59VNuJkJpgcynB6"><Item link1="https://res.cloudinary.com/dwjesc65k/image/upload/v1677096634/cultrang%2723/Web_Merch-01_xyb7h8.png" link2="https://res.cloudinary.com/dwjesc65k/image/upload/v1677351580/cultrang%2723/mobile_view_merch_eqlmfc.png" text="Buy Now"></Item></Link>
          </Carousel>
    )
  }