import React from "react";

import "./item.css"

export default function Item(props) {
  return (
    <div className="ItemMerch">
      <div><img className="link1" src={props.link1} alt="" /></div>
      <div><img classname="link2" src={props.link2} alt="" /></div>
      <div style={{color: "white", textAlign: 'center', fontSize: '40px', fontWeight: '500'}}>{props.text}</div>
    </div>
  );
}