import React from "react";

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
        backgroundColor: "#E5E5E5",
        fontSize: "16px"
        
    }
    return(
        <div style={style}>
            {
                props.showBasket === true
                ?   props.services.map((service, id) => (
                        <div key={id}>{id+1}. {service.base} {service.core} {service.extras} {service.length}</div>
                    ))
                :   null
            }
        </div>
    );
};

function Basket(props) {
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
    const message = `${totalServices} services at £28`;
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
                        services={props.services}/>
                    <ChooseTime
                        services={props.services}/>
                </div>
            </div>
    );
};

export {Confirmation};