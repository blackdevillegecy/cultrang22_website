import React from "react";
import "./sponsers.css";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4},
    { width: 1200, itemsToShow: 5 },
  ];

export default function Sponsers() {
    return (
        <div className="Sponsers" id="sponsers">
          <div className="Sponsers-heading">sponsors/પ્રાયોજકો</div><br/>
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
                <Link to="https://in.linkedin.com/company/cultrang"><div><LinkedInIcon sx={{fontSize: '30px'}} /></div></Link>
                <Link to="https://www.instagram.com/cultrangiitgoa/?hl=en"><div><InstagramIcon sx={{fontSize: '30px'}} /></div></Link>
                <div><YouTubeIcon sx={{fontSize: '30px'}} /></div>
            </div>
        </div>
    );
  }
