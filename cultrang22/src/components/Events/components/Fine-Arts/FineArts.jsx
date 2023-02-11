import React from "react";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import "./finearts.css"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

export default function FineArts() {
    return (
        <div className="Event-FineArts" >
            <Carousel breakPoints={breakPoints} enableSwipe={true} enableMouseSwipe={true} >
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053869/cultrang%2723/Poster_brush_the_face_ks0nl8.png" registration="https://forms.gle/uZsag6yV7k7Tcu8s9" rulebook="https://drive.google.com/file/d/100Th9AglsxKckW0LKGVpSJmkde_cRSdk/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053869/cultrang%2723/Poster_brush_the_shirt_yib1ep.png" registration="https://forms.gle/ozf6KCGYMBobt8TY7" rulebook="https://drive.google.com/file/d/1036PIGlTiuv2Dv605UeSDF5XwGNZ6hzb/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053869/cultrang%2723/Poster_brush_feud_zakm07.png" registration="https://forms.gle/DHjC6iAbJP6Jz5ym8" rulebook="https://drive.google.com/file/d/103P0a_OoWdGj-aEJKPiuVGgzZrjGy-kT/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053871/cultrang%2723/Poster_Pencil_Feud_sq8mtp.png" registration="https://forms.gle/7EjJfrfTg8Vp3n5Q9" rulebook="https://drive.google.com/file/d/1064hBHtVeV8aAd8zYap6M2gD28SGXsk2/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053868/cultrang%2723/Poster_blind_art_mnh95t.png" registration="https://forms.gle/PVvkrTwVATtmLqPM6" rulebook="https://drive.google.com/file/d/1-uRVVbLyPXmzMGI4_leGkKaQOtKPJ7EM/view"></Item>
        </Carousel>
    </div>
    );
}
