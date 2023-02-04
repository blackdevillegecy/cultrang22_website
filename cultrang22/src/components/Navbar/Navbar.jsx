import React from "react";
import "./navbar.css"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';

export default function Navbar () {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="Navbar">
            <div className="Navbar-items">
                <div>HOME</div>
                <div>ABOUT</div>
                <div>EVENTS</div>
                <div>MERCHANDISE</div>
                <div>SPONSORS</div>
                <div>RULEBOOK</div>
                <div>CONTACT US</div>
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