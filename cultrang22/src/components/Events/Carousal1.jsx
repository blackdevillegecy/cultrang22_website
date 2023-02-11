import Carousel from "react-elastic-carousel";
import React from 'react'
import "./events.css"
import Item from "./Item";
import { Link } from "react-router-dom";
import ArtsEvents from "./components/Music/Music";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

export default function Carousal1() {

  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
  if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      carouselRef.current.goTo(0);
  }
  };
  const onPrevStart = (currentItem, nextItem) => {
  if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      carouselRef.current.goTo(8);
  }
  };
  return (
      <Carousel breakPoints={breakPoints} enableSwipe={true} enableMouseSwipe={true}>
            <Link to="/event-music"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053928/cultrang%2723/yellow_music_kh9r9r.png" text="Music"></Item></Link>
            <Link to="/event-dance"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053926/cultrang%2723/blue_dance_otgz9s.png" text="Dance"></Item></Link>
            <Link to="/event-dramatics"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053928/cultrang%2723/red_drama_jjmlcc.png" text="Dramatics"></Item></Link>
            <Link to="/event-fine-arts"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053926/cultrang%2723/green_fine_arts_fv617f.png" text="Fine Arts"></Item></Link>
            <Link to="/event-literary-arts"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053926/cultrang%2723/events_thumbnail_literary_wsr31f.png" text="Literary Arts"></Item></Link>
            <Link to="/event-dda"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053927/cultrang%2723/peach_design_sxqcoc.png" text="Design and Digital Art"></Item></Link>
            <Link to="/event-fashion"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053928/cultrang%2723/pink_magic_life_sqoic0.png" text="Fashion"></Item></Link>
            {/* <Link to="/event-fun"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1675543613/cultrang%2723/event-poster_fb686j.webp" text="Fun"></Item></Link> */}
        </Carousel>
  )
}
