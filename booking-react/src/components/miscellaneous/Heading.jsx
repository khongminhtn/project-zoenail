import React from "react";

function Heading(props) {
    const style = {
        textAlign: "center",
        fontSize: "45px",
        fontWeight: "500",
        textShadow: "-3px 3px 5px rgba(0,0,0,0.19)",
        margin: "10% 0 30px 4% ",
    };

    return(
        <div style={style}>{props.name}</div>
    );
};

export {Heading}