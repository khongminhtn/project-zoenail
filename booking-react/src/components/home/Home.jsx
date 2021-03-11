import React from 'react';
import { Heading } from '../miscellaneous/Heading';
import NailPolish from './svg/polish.svg';
import GetStarted from './GetStarted'
import About from './About'
import {Link} from 'react-router-dom'

var headingStyle = {
    textAlign: "left",
    fontSize: "45px",
    fontWeight: "500",
    textShadow: "-3px 3px 5px rgba(0,0,0,0.19)",
    margin: "30% 0 30px 4%"
}

var textStyle = {
    textAlign: "left",
    fontSize: "14px",
    margin: "10% 4% 30px 4%"
}

var imageStyle = {
    height: 150,
    textAlign: "center",
    marginTop: "20%"
}

var pageStyle = {
    margin: 0,
    padding: 0,
    height: "100%",
    position: "relative",
}

function Home () {
    return (
        <div style={pageStyle}>
            <div style={imageStyle}>
                <img height="150" src={NailPolish} alt="nail polish"/>
            </div>
            <div style={headingStyle}>Zoe Nail</div>
            <div style={textStyle}>Welcome to Zoe Nails, our store has been openned since 2019. We have a variety of beauty services that will make you look fabulous in your everyday life. Rest assured that the health and appearance of your hand and feet are our top priority once you step into our store.</div>
            <Link to="/booking">
                <GetStarted/>
            </Link>
            <Link to="/about">
                <About/>
            </Link>
        </div>
    )
}

export {Home}