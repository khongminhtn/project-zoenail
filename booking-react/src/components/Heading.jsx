import React from "react";

function Heading(props) {
    const style = {
        fontSize: "45px",
        fontWeight: "500",
        textShadow: "-3px 3px 5px rgba(0,0,0,0.19)",
        margin: "10% 0 30px 4% ",
    };

    return(
        <div style={style}>Booking</div>
    );
};

export {Heading}