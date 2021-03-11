import React from 'react';

var buttonStyle = {
    margin: "0 0 0 4%",
    padding: 5,
    fontSize: "20px",
    fontWeight: "400",
    color: "white",
    background: "black",
    borderRadius: 15,
    width: 150,
    textAlign: "center",
    boxShadow: "-2px 2px 5px 0px rgba(0,0,0,0.33)",
}

function GetStarted () {
    return (
        <div style={buttonStyle}>Get Started</div>
    )
}

export default GetStarted;