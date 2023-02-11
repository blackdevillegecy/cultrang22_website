import React from "react";
import "./navbar.css"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Navbar () {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="Navbar">
            <div className="Navbar-items">
                <Link to="https://www.instagram.com/cultrangiitgoa/?hl=en"><div className="Navbar-icon" style={{justifyContent: 'flex-start'}}><img src="https://res.cloudinary.com/dwjesc65k/image/upload/v1676053926/cultrang%2723/Icon_p16i5p.png" alt="" style={{width: '40px'}} /></div></Link>
                <div><a href="#home">HOME</a></div>
                <div><a href="#about">ABOUT</a></div>
                <div><a href="#events">EVENTS</a></div>
                <div><a href="#merchandise">MERCHANDISE</a></div>
                <div><a href="#sponsers">SPONSORS</a></div>
                <div>RULEBOOK</div>
                <div><a href="#contact">CONTACT US</a></div>
            </div>
            <div className="Navbar-mobile">
                <div>HOME</div>
                <div>EVENTS</div>
                <div>RULEBOOK</div>
                <div>MERCHANDISE</div>
            {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
                <div>
                    <div>ABOUT</div>
                    <div>SPONSORS</div>
                    <div>CONTACT US</div>
                </div>
            )}
            </div>
        </div>
    );
}