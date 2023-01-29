import React from "react";
import "./mainpage.css";
import Navbar from "../Navbar/Navbar";
import Sponsers from "../Sponsers/Sponsers";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Events from "../Events/Events";

export default function MainPage () {
    return (
        <div className="MainPage">
            <Navbar />
            <Home />
            <Events />
            <Sponsers />
            <About />
            <Contact />
        </div>
    );
}