import React from 'react';

export default function Confirmation(props) {
    const style = {
        position: "fixed",
        width: "100%",
        bottom: "0px",
    }
    const totalStyle = {
        display: "inline-block",
        backgroundColor: "black",
        color: "white",
        width: "50%",
        textAlign: "center",
        padding: "10px 0 10px 0"
    }
    const confirmStyle = {
        backgroundColor: "#FFBEBE",
        display: "inline-block",
        width: "50%",
        textAlign: "center",
        color: "black",
        padding: "10px 0 10px 0"
    }
    return(
        <div style={style}>
            <div style={totalStyle}><i>Total</i> <b>£{props.data.totalPrice}</b></div>
            <div style={confirmStyle}>Confirm</div>
        </div>
    )
}