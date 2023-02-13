import React from "react";
import "./promo.css";
import TypeWriterEffect from "react-typewriter-effect";

export default function Promo() {
  return (
    <div className="home">
      <div className="container">
        <div className="biglogo">
          <img
            src="https://res.cloudinary.com/dwjesc65k/image/upload/v1674363032/cultrang%2723/logo_dnscey.png"
            alt=""
            width="700"
          />
          {/* <img src="https://res.cloudinary.com/duvqri8vt/image/upload/v1647418471/Cultrang22/logo_mjmavn.png" alt="" /> */}
        </div>

        <div className="type-text">
        <span>Coming Soon</span>
        <TypeWriterEffect
          textStyle={{
            fontFamily: "Bebas Neue",
          }}
          startDelay={1000}
          loop="1"
          cursorColor="white"
          text="..."
          typeSpeed={100}
        />
      </div>
      <br />
      <div className="register">
        <a href="https://taplink.cc/cultrang23" className="linktree-link" style={{textDecoration: 'none'}}>
          Register Here
        </a>
      </div>
      </div>
    </div>
  );
}
