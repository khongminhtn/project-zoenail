import React from "react";
import {Link} from 'react-router-dom'

function ChooseTime(props) {
    const style = {
        display: "inline-block",
        width: "35%",
        textAlign: "center",
        backgroundColor: "#FFBEBE",
        padding: "10px 0 10px 0"
    };

    return(
        props.services.length > 0
        ?   <div style={style}>Choose Time</div>
        :   null
    );
};

function BasketExtension(props) {
    const style = {
        padding: "0 10px 0 10px",
        backgroundColor: "#E5E5E5",
        fontSize: "16px"
    }
    return(
        <div style={style}>
            {
                props.showBasket === true
                ?   props.services.map((service, id) => (
                        <div 
                            style={{padding: "0 0 10px 0"}}
                            key={id}
                        ><b>{id+1}.</b> {service.base} {service.core} {service.extras} {service.length}</div>
                    ))
                :   null
            }
        </div>
    );
};

function Basket(props) {
    // Styling
    let width = null
    const style = {
        display: "inline-block",
        backgroundColor: "black",
        color: "white",
        width: props.services.length === 0 ? width = "100%" : width = "65%",
        padding: "10px 0 10px 0",
        textAlign: "center",
    };

    const totalServices = props.services.length;
    const message = `${totalServices} services at £${props.totalPrice}`;
    return(
        <div 
            style={style}
            onClick={props.handleBasket}>
                {message}
        </div>
    );
};


function Confirmation (props) {
    const style = {
        position: "fixed",
        width: "100%",
        bottom: "0px",
    };

    return(
        props.services.length === 0
        ?   null
        :   <div style={style}>
                <BasketExtension
                    showBasket={props.showBasket}
                    services={props.services}/>

                <div>
                    <Basket
                        handleBasket={props.handleBasket}
                        services={props.services}
                        totalPrice={props.totalPrice}/>
                    <Link to="/detail">
                        <ChooseTime
                            services={props.services}/>
                    </Link>
                </div>
            </div>
    );
};

export {Confirmation};