import React from "react";
import "./sponsers.css";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

export default function Sponsers() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Sponsers</h1>
        <div className="Sponsers">
          <Carousel breakPoints={breakPoints}>
            <Item>Cultrang_Sponser_1</Item>
            <Item>Cultrang_Sponser_2</Item>
            <Item>Cultrang_Sponser_3</Item>
            <Item>Cultrang_Sponser_4</Item>
            <Item>Cultrang_Sponser_5</Item>
          </Carousel>
        </div>
      </>
    );
  }
