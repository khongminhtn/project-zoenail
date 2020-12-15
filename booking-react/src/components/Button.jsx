import React from 'react';

function Button(props) {
    var circleStyle = {
        display:"inline-block",
        backgroundColor: props.color,
        borderRadius: "50%",
        border: "1px solid",
        borderColor: "grey",
        width: "20px",
        height: "20px",
        boxShadow: "-2px 2px 5px 0px rgba(0,0,0,0.33)",
        marginLeft: 10,
        verticalAlign: "top",
    };

    return(
        <div 
            name={props.name}
            price={props.price}
            onClick={props.handleEvent}
            style={circleStyle}></div>
    );
};

export{Button}