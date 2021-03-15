import React from 'react';

var buttonStyle = {
    padding: 5,
    fontSize: "20px",
    fontWeight: "400",
    color: "white",
    background: "black",
    width: "100%",
    textAlign: "center",
    boxShadow: "-2px 2px 5px 0px rgba(0,0,0,0.33)",
    position: "fixed",
    bottom: 0,
    left: 0
}

function About () {
    return (
        <div style={buttonStyle}>
            <div>About</div>
            <div style={{fontSize: "12px"}}>Icons made by <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">Nhor Phai</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    )
}

export default About;