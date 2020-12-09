import React from 'react';
import {Price} from "./Price"


function ServiceLength(props) {
    const style = {
        fontSize: "15px",
        margin: "15px 0 15px 0"
    }

    return(
        <div>
            <div style={style}>
                <div 
                    style={{display: "inline"}}
                    onClick={props.handleLength}
                    name="Long"
                >Long</div>

                <Price
                    selected={props.selected}
                    handleLength={props.handleLength}
                    name="Long"/>
            </div>

            <div style={style}>
                <div 
                    style={{display: "inline"}}
                    onClick={props.handleLength}
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
        fontSize: "15px",
        margin: "15px 0 15px 0"
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
                                style={{display:"inline"}}
                                onClick={props.handleExtras}
                                name="With Shellac"
                            >With Shellac</div>

                            <Price
                                selected={props.selected}
                                handleExtras={props.handleExtras}
                                name="With Shellac"/>
                        </div>

                        <div style={style}>
                            <div 
                                style={{display:"inline"}}
                                onClick={props.handleExtras}
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
                                style={{display:"inline"}}
                                onClick={props.handleExtras}
                                name="With UV"
                            >With UV top coat</div>

                            <Price
                                selected={props.selected}
                                handleExtras={props.handleExtras}
                                name="With UV"/>
                        </div>

                        <div style={style}>
                            <div 
                                style={{display:"inline"}}
                                onClick={props.handleExtras}
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
        margin: "15px 0 15px 0"
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
                                style={{display: "inline"}}
                                onClick={props.handleCore}
                                name={service}
                            >{service}</div>

                            <Price 
                                handleCore={props.handleCore}
                                name={service}
                                selected={props.selected}/>
                        </div>
                    )
                )

                :   props.name === "Infill"
                ?   infill.map((service) => (
                        <div
                            key={service} 
                            style={style}>
                            <div
                                style={{display: "inline"}}
                                onClick={props.handleCore}
                                name={service}
                            >{service}</div>

                            <Price 
                                handleCore={props.handleCore}
                                name={service}
                                selected={props.selected}/>
                        </div>
                    )
                )

                :   props.name === "Spa"
                ?   pedicureManicure.map((service) => (
                        <div
                            key={service} 
                            style={style}>
                            <div
                                style={{display: "inline"}}
                                onClick={props.handleCore}
                                name={service}
                            >{service}</div>

                            <Price 
                                handleCore={props.handleCore}
                                name={service}
                                selected={props.selected}/>
                        </div> 
                    )
                )

                :   props.name === "Take Off"
                ?   takeOff.map((service) => (
                        <div
                            key={service} 
                            style={style}>
                            <div
                                style={{display: "inline"}}
                                onClick={props.handleCore}
                                name={service}
                            >{service}</div>

                            <Price 
                                handleCore={props.handleCore}
                                name={service}
                                selected={props.selected}/>
                        </div>
                    )
                )

                :   props.name === "Other Services"
                ?   otherServices.map((service) => (
                        <div
                            key={service} 
                            style={style}>
                            <div
                                style={{display: "inline"}}
                                onClick={props.handleCore}
                                name={service}
                            >{service}</div>

                            <Price 
                                handleCore={props.handleCore}
                                name={service}
                                selected={props.selected}/>
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
        boxShadow: "-3px 3px 10px 0px rgba(0,0,0,0.33)",
        border: "1px solid",
        borderColor: "lightgray",
        borderRadius: "20px",
        margin: "0 5% 20px 5%",
        padding: "10px 15px 10px 15px"
    }
    const services = Object.entries(props.selected);
    return(
        <div style={style}>
            
            <div 
                onClick={props.handleBase}
                name={props.name}>

                    <div 
                        style={{display: "inline"}}
                        onClick={props.handleBase}
                        name={props.name}
                    >{props.name}</div>

                    <Price 
                        onClick={props.handleBase}
                        name={props.name}
                        selected={props.selected}/>
            </div>


            <div>
                {
                    services.map((service) => (
                            props.selected.base === props.name
                            && service[0] === "core"
                            ?   <div
                                    style={{
                                        fontSize: "16px",
                                        margin: "15px 0 0 0"
                                    }} 
                                    key={service[0]}>{service[1]}</div>

                            :   props.selected.base === props.name
                                && service[0] === "extras"
                            ?   <div 
                                    style={{
                                        fontSize: "16px",
                                        margin: "15px 0 0 0"
                                    }} 
                                    key={service[0]}>{service[1]}</div>
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