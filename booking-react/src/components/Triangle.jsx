import React from "react";

export default function Triangle (props) {
    const style = {
        float: "right",
        display: "inline-block",
        width: 0,
        height: 0,
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderBottom: "15px solid black",
        margin: "5px 0 0 15px"
    }
    return(
        <div 
            style={style}
            onClick={props.handleBase}
            name={props.name}></div>
    )
}