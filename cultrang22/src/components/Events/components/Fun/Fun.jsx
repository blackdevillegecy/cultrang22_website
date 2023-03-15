import React from "react";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import "./fun.css"
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

export default function Fun() {
    return (
        <>
        <br />
            <Link to="/~cultrang"><ArrowBackIcon style={{marginLeft: '15px'}}/></Link>
            <br />
        <div className="Event-Fun" >
            <Carousel breakPoints={breakPoints} enableSwipe={true} enableMouseSwipe={true} >
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1675543613/cultrang%2723/event-poster_fb686j.webp" registration="https://forms.gle/BeCVZQzjdk4uxEUa8" rulebook="https://drive.google.com/file/d/1-RNqB6x8-lLvEU8mKtcRoFWlSDZ7ZCl_/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1675543613/cultrang%2723/event-poster_fb686j.webp" registration="https://forms.gle/BeCVZQzjdk4uxEUa8" rulebook="https://drive.google.com/file/d/1-RNqB6x8-lLvEU8mKtcRoFWlSDZ7ZCl_/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1675543613/cultrang%2723/event-poster_fb686j.webp" registration="https://forms.gle/BeCVZQzjdk4uxEUa8" rulebook="https://drive.google.com/file/d/1-RNqB6x8-lLvEU8mKtcRoFWlSDZ7ZCl_/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1675543613/cultrang%2723/event-poster_fb686j.webp" registration="https://forms.gle/BeCVZQzjdk4uxEUa8" rulebook="https://drive.google.com/file/d/1-RNqB6x8-lLvEU8mKtcRoFWlSDZ7ZCl_/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1675543613/cultrang%2723/event-poster_fb686j.webp" registration="https://forms.gle/BeCVZQzjdk4uxEUa8" rulebook="https://drive.google.com/file/d/1-RNqB6x8-lLvEU8mKtcRoFWlSDZ7ZCl_/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1675543613/cultrang%2723/event-poster_fb686j.webp" registration="https://forms.gle/BeCVZQzjdk4uxEUa8" rulebook="https://drive.google.com/file/d/1-RNqB6x8-lLvEU8mKtcRoFWlSDZ7ZCl_/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1675543613/cultrang%2723/event-poster_fb686j.webp" registration="https://forms.gle/BeCVZQzjdk4uxEUa8" rulebook="https://drive.google.com/file/d/1-RNqB6x8-lLvEU8mKtcRoFWlSDZ7ZCl_/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1675543613/cultrang%2723/event-poster_fb686j.webp" registration="https://forms.gle/BeCVZQzjdk4uxEUa8" rulebook="https://drive.google.com/file/d/1-RNqB6x8-lLvEU8mKtcRoFWlSDZ7ZCl_/view"></Item>
        </Carousel>
        </div></>
    );
}