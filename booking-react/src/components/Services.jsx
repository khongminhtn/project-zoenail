import React from 'react';
import Price from "./Price";
import { Button } from "./Button";

function Triangle (props) {
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

function ServiceLength(props) {
    const style = {
        fontSize: "16px",
        margin: "10px 0 15px 0"
    };

    return(
        <div>
            <div style={style}>
                <div 
                    style={{
                        display: "inline",
                        float:"left",
                    }}
                    name="Long"
                >Long</div>

                <Price
                    selected={props.selected}
                    handleLength={props.handleLength}
                    name="Long"/>
            </div>

            <div style={style}>
                <div 
                    style={{
                        display: "inline",
                        float:"left",
                    }}
                    name="Short"
                >Short</div>

                <Price
                    selected={props.selected}
                    handleLength={props.handleLength}
                    name="Short"/>
            </div>
        </div>
    )
}


function ServiceExtras(props) {
    const style = {
        fontSize: "16px",
        margin: "10px 0 15px 0"
    }
    return(
        <div>
            {
                (props.core === "Acrylic" 
                    || props.core === "Gel Powder"
                    || props.core === "Pedicure"
                    || props.core === "Manicure")
                ?   <div>
                        <div style={style}>
                            <div 
                                style={{
                                    display:"inline",
                                    float:"left",
                                }}
                                name="With Shellac"
                            >With Shellac</div>

                            <Price
                                selected={props.selected}
                                handleExtras={props.handleExtras}
                                name="With Shellac"/>
                        </div>

                        <div style={style}>
                            <div 
                                style={{
                                    display:"inline",
                                    float:"left",
                                }}
                                name="Without Shellac"
                            >Without Shellac</div>

                            <Price
                                selected={props.selected}
                                handleExtras={props.handleExtras}
                                name="Without Shellac"/>
                        </div>
                    </div>

                :   props.core === "Permanent white tips"
                ?   <div>
                        <div style={style}>
                            <div 
                                style={{
                                    display:"inline",
                                    float:"left",
                                }}
                                name="With UV"
                            >With UV top coat</div>

                            <Price
                                selected={props.selected}
                                handleExtras={props.handleExtras}
                                name="With UV"/>
                        </div>

                        <div style={style}>
                            <div 
                                style={{
                                    display:"inline",
                                    float:"left",
                                }}
                                name="Without UV"
                            >Without UV top coat</div>

                            <Price
                                selected={props.selected}
                                handleExtras={props.handleExtras}
                                name="Without UV"/>
                        </div>
                    </div>
                :   null
            }
        </div>
    )
}


function ServiceCore(props) {
    const style = {
        fontSize: "16px",
        margin: "10px 0 15px 0"
    }
    const fullSet = ["Acrylic", "Gel Powder", "Permanent white tips", "Ombre"]
    const infill = ["Acrylic", "Gel Powder", "Ombre"]
    const pedicureManicure= ["Pedicure", "Manicure"]
    const takeOff = ["Take Off Acrylic", "Take Off Shellac"]
    const otherServices = [
        "Polish change on natural nails",
        "Polish change on Acrylic",
        "Polish change for feet",
        "Acrylic on two big toes",
        "Infill for two big toes",
        "Repair for one nail",
        "Cut down nail acrylic only",
        "10 diamonds",
        "Design",
        "Shellac on natural nails",
        "Shellac on feet",
        "Shellac on hand and feet"
    ]

    return(
        <div>
            {
                props.name === "Full Set"
                ?   fullSet.map((service) => (
                        <div 
                            key={service}
                            style={style}>
                            <div
                                style={{
                                    display: "inline",
                                    float:"left"
                                }}
                                name={service}
                            >{service}</div>

                            <Price 
                                selected={props.selected}
                                handleCore={props.handleCore}
                                name={service}
                                />
                        </div>
                    )
                )

                :   props.name === "Infill"
                ?   infill.map((service) => (
                        <div
                            key={service} 
                            style={style}>
                            <div
                                style={{
                                    display: "inline",
                                    float:"left",
                                }}
                                name={service}
                            >{service}</div>

                            <Price 
                                selected={props.selected}
                                handleCore={props.handleCore}
                                name={service}
                                />
                        </div>
                    )
                )

                :   props.name === "Spa"
                ?   pedicureManicure.map((service) => (
                        <div
                            key={service} 
                            style={style}>
                            <div
                                style={{
                                    display: "inline",
                                    float:"left",
                                }}
                                name={service}
                            >{service}</div>

                            <Price 
                                selected={props.selected}
                                handleCore={props.handleCore}
                                name={service}
                                />
                        </div> 
                    )
                )

                :   props.name === "Take Off"
                ?   takeOff.map((service) => (
                        <div
                            key={service} 
                            style={style}>
                            <div
                                style={{
                                    display: "inline",
                                    float:"left",
                                }}
                                name={service}
                            >{service}</div>

                            <Price 
                                selected={props.selected}
                                handleCore={props.handleCore}
                                name={service}
                                />
                        </div>
                    )
                )

                :   props.name === "Other Services"
                ?   otherServices.map((service) => (
                        <div
                            key={service} 
                            style={style}>
                            <div
                                style={{
                                    display: "inline",
                                    float:"left",
                                }}
                                name={service}
                            >{service}</div>

                            <Price 
                                selected={props.selected}
                                handleCore={props.handleCore}
                                name={service}
                                />
                        </div>
                    )
                )
                :   null
            }
        </div>
    );
}


function ServiceBase(props) {
    const style = {
        boxShadow: "-2px 2px 5px 0px rgba(0,0,0,0.2)",
        border: "1px solid",
        borderColor: "lightgray",
        borderRadius: "20px",
        margin: "0 5% 20px 5%",
        padding: "10px 15px 10px 15px",
        textAlign: "right",
        height: 50,
        transition: "height 0.2s ease-out"
    }

    // Animation
    if (props.name === props.selected.base && props.name === "Full Set") {
        style.height = 216
    } else if (props.name === props.selected.base && props.name === "Infill") {
        style.height = 177
    } else if (props.name === props.selected.base && props.name === "Spa") {
        style.height = 138
    } else if (props.name === props.selected.base && props.name === "Take Off") {
        style.height = 138
    } else if (props.name === props.selected.base && props.name === "Other Services") {
        style.height = 528
    }

    if (
        props.name === props.selected.base 
        && props.name === "Infill" 
        && props.selected.extras !== null
    ) {
        style.height = 216
    } else if (
        props.name === props.selected.base 
        && props.name === "Spa" 
        && props.selected.core !== null
    ) {
        style.height = 177
    } 

    const services = Object.entries(props.selected);
    return(
        <div style={style} id={props.name}>
            <div
                onClick={props.handleBase}
                name={props.name}>

                    <div
                        style={{
                            display: "inline",
                            float:"left"
                        }}
                        onClick={props.handleBase}
                        name={props.name}
                    >{props.name}</div>
                    
                    <Price
                        onClick={props.handleBase}
                        name={props.name}
                        selected={props.selected}/>

                    <Triangle
                        selected={props.selected}
                        handleBase={props.handleBase}
                        name={props.name}/>
            </div>

            <div>
                {
                    services.map((service) => (
                            props.selected.base === props.name
                            && service[0] === "core"
                            && service[1] !== null
                            ?   <div 
                                    key={service[0]}
                                    style={{marginTop: 10}}>
                                    <div
                                        style={{
                                            float:"left",
                                            fontSize: "16px",
                                            display: "inline-block"
                                        }} 
                                        key={service[0]}>{service[1]}
                                    </div>
                                    <Button
                                        key={service[1]}
                                        name={null}
                                        handleEvent={null}
                                        price={null}
                                        color={"black"}/>
                                </div>

                            :   props.selected.base === props.name
                                && service[0] === "extras"
                                && service[1] !== null
                            ?   <div 
                                    key={service[0]}
                                    style={{marginTop: 10}}>
                                    <div 
                                        style={{
                                            float:"left",
                                            display: "inline-block",
                                            fontSize: "16px",
                                        }} 
                                    >{service[1]}</div>
                                    <Button
                                        name={null}
                                        handleEvent={null}
                                        price={null}
                                        color={"black"}/>
                                </div>
                            :   null
                        )
                    )
                }
            </div>

            <div>
                {   
                    props.name === props.selected.base
                    && props.selected.core === "Ombre"
                    ?   <ServiceLength
                            selected={props.selected}
                            handleLength={props.handleLength}/>
                            
                    :   props.name === props.selected.base 
                        && props.selected.core === null
                    ?   <ServiceCore
                            selected={props.selected}
                            handleCore={props.handleCore}
                            name={props.name}/>

                    :   props.name === props.selected.base
                        && props.selected.core !== null
                        && props.selected.extras === null
                    ?   <ServiceExtras 
                            selected={props.selected}
                            handleExtras={props.handleExtras}
                            core={props.selected.core}/>
                            
                    :   props.name === props.selected.base 
                        && props.selected.base !== "Spa"
                        && props.selected.core !== null
                    ?   <ServiceLength
                            selected={props.selected}
                            handleLength={props.handleLength}/>

                    :   null
                }
            </div>
        </div>
    );
}


function Services (props) {
    let services=[
        "Full Set", 
        "Infill", 
        "Spa", 
        "Take Off", 
        "Other Services"
    ];

    return(
        <div>
            {
                services.map((service) => (
                        <ServiceBase 
                            key={service}
                            handleBase={props.handleBase}
                            handleCore={props.handleCore}
                            handleExtras={props.handleExtras}
                            handleLength={props.handleLength}
                            selected={props.selected} 
                            name={service}/>
                    )
                )
            }
        </div>
    );
};



export {Services}