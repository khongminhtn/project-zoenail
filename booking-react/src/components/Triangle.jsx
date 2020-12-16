import React from "react";

export default function Triangle (props) {
    let deg = 0
    if (props.name === props.selected.base) {
        deg = 180
    }

    const style = {
        float: "right",
        display: "inline-block",
        width: 0,
        height: 0,
        borderLeft: "8px solid transparent",
        borderRight: "8px solid transparent",
        borderTop: "15px solid black",
        margin: "8px 0 0 15px",
        transform: `rotate(${deg}deg)`,
        transition: "transform 0.3s"
    }

    return(
        <div 
            style={style}
            onClick={props.handleBase}
            name={props.name}></div>
    )
}