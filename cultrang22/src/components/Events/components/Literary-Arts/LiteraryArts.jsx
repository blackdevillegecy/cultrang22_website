import React from "react";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import "./literaryarts.css"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

export default function LiteraryArts() {
    return (
        <div className="Event-LiteraryArts" >
            <Carousel breakPoints={breakPoints} enableSwipe={true} enableMouseSwipe={true} >
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053871/cultrang%2723/Poster_lafz_el10rf.png" registration="https://forms.gle/Dv7HXsbDNmxDni7A8" rulebook="https://drive.google.com/file/d/10AM7d1fL9kXKPRSF1ZSgYV6TZF5trnjw/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053870/cultrang%2723/Poster_debatofiesta_xg18vk.png" registration="https://forms.gle/tY36nXrgjBwL9Jwv8" rulebook="https://drive.google.com/file/d/10xtk5k_YnOLePxKjrYuSEq6KKQsVENUx/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1675543613/cultrang%2723/event-poster_fb686j.webp" registration="https://forms.gle/n9oksuEgkFcFJmk67" rulebook="https://drive.google.com/file/d/10Cun_dxNJ60c7xhsHokdt-OJgoN9crAi/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1675543613/cultrang%2723/event-poster_fb686j.webp" registration="https://forms.gle/3c8BrwkzSdMbMKCV7" rulebook="https://drive.google.com/file/d/1-RNqB6x8-lLvEU8mKtcRoFWlSDZ7ZCl_/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1675543613/cultrang%2723/event-poster_fb686j.webp" registration="https://forms.gle/wtig4kfngDeSQE6G8" rulebook="https://drive.google.com/file/d/10S2CKpxZOUeRSYGU_H5JTm0__nzh1xYm/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1675543613/cultrang%2723/event-poster_fb686j.webp" registration="https://forms.gle/HUWJq1WXhD3aQCCV7" rulebook="https://drive.google.com/file/d/10KBBF2-GAVokz8TwpGi_MEPjZyFE_IOJ/view"></Item>
            <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1675543613/cultrang%2723/event-poster_fb686j.webp" registration="https://forms.gle/J1CJHMxmLL42Xstr9" rulebook="https://drive.google.com/file/d/10NVh5r_liGTTfk1qlclUA8sJdet5tLhP/view"></Item>
        </Carousel>
        </div>
    );
}