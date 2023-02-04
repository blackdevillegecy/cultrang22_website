import React from "react";
import "./sponsers.css";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4},
    { width: 1200, itemsToShow: 5 },
  ];

export default function Sponsers() {
    return (
        <div className="Sponsers">
          <div className="Sponsers-heading">sponsors</div><br/>
          <div className="Sponsers-slider-headings">TITLE SPONSORS</div>
          <Carousel breakPoints={breakPoints}>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
          </Carousel>
          <br />
          <div className="Sponsers-slider-headings">ASSOCIATE SPONSORS</div>
          <Carousel breakPoints={breakPoints}>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
          </Carousel>
          <br />
          <div className="Sponsers-slider-headings">OTHER SPONSORS</div>
          <Carousel breakPoints={breakPoints}>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
          </Carousel>
            <div className="Sponsers-social-media">
                <div><TwitterIcon sx={{fontSize: '30px'}} /></div>
                <div><FacebookIcon sx={{fontSize: '30px'}} /></div>
                <div><InstagramIcon sx={{fontSize: '30px'}} /></div>
            </div>
        </div>
    );
  }
