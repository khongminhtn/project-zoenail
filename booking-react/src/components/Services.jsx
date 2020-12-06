import React from 'react';


function ServiceLength(props) {
    return(
        <div>
            <div 
                onClick={props.handleLength}
                name="Long"
            >Long</div>

            <div 
                onClick={props.handleLength}
                name="Short"
            >Short</div>
        </div>
    )
}


function ServiceExtras(props) {
    return(
        <div>
            {
                (props.core === "Acrylic" 
                    || props.core === "Gel Powder"
                    || props.core === "Pedicure"
                    || props.core === "Manicure")
                ?   <div>
                        <div 
                            onClick={props.handleExtras}
                            name="With Shellac"
                        >With Shellac</div>
                        <div
                            onClick={props.handleExtras}
                            name="Without Shellac"
                        >Without Shellac</div>
                    </div>

                :   props.core === "Permanent white tips"
                ?   <div>
                        <div 
                            onClick={props.handleExtras}
                            name="With UV"
                        >With UV top coat</div>
                        <div
                            onClick={props.handleExtras}
                            name="Without UV"
                        >Without UV top coat</div>
                    </div>
                :   null
            }
        </div>
    )
}


function ServiceCore(props) {
    const fullSet = ["Acrylic", "Gel Powder", "Permanent white tips", "Ombre"]
    const infill = ["Acrylic", "Gel Powder", "Ombre"]
    const pedicureManicure= ["Pedicure", "Manicure"]
    const takeOff = ["Take Off Acrylic", "Take Off Shellac & Re-done", "Take Off Shellac"]
    const otherServices = [
        "Polish change on natural nails",
        "Polish change on existing Acrylic",
        "Polish change for feet",
        "Acrylic on two big toes",
        "Infill for two big toes",
        "Repair for one nail",
        "Cut down nail acrylic only",
        "10 diamonds",
        "Design"
    ]

    return(
        <div>
            {
                props.name === "Full Set"
                ?   fullSet.map((service) => (
                        <div
                            key={service}
                            onClick={props.handleCore}
                            name={service}
                        >{service}</div>
                    )
                )

                :   props.name === "Infill"
                ?   infill.map((service) => (
                        <div
                            key={service}
                            onClick={props.handleCore}
                            name={service}
                        >{service}</div>  
                    )
                )

                :   props.name === "Pedicure and Manicure"
                ?   pedicureManicure.map((service) => (
                        <div
                            key={service}
                            onClick={props.handleCore}
                            name={service}
                        >{service}</div>  
                    )
                )

                :   props.name === "Take Off"
                ?   takeOff.map((service) => (
                        <div
                            key={service}
                            onClick={props.handleCore}
                            name={service}
                        >{service}</div>  
                    )
                )

                :   props.name === "Other Services"
                ?   otherServices.map((service) => (
                        <div
                            key={service}
                            onClick={props.handleCore}
                            name={service}
                        >{service}</div>  
                    )
                )
                :   null
            }
        </div>
    );
}


function ServiceBase(props) {
    const services = Object.entries(props.selected);
    return(
        <div className="Service">

            <div 
                onClick={props.handleBase}
                name={props.name}
            >{props.name}</div>

            <div>
                {
                    services.map((service) => (
                            props.selected.base === props.name
                            && service[0] === "core"
                            ?   <div key={service[0]}>{service[1]}</div>

                            :   props.selected.base === props.name
                                && service[0] === "extras"
                            ?   <div key={service[0]}>{service[1]}</div>
                            :   null
                        )
                    )
                }
            </div>

            <div>
                {
                    props.name === props.selected.base 
                        && props.selected.core === null
                    ?   <ServiceCore
                            handleCore={props.handleCore}
                            name={props.name}/>

                    :   props.name === props.selected.base
                            && props.selected.core !== null
                            && props.selected.extras === null
                    ?   <ServiceExtras 
                            handleExtras={props.handleExtras}
                            core={props.selected.core}/>

                    :   props.name === props.selected.base 
                            && props.selected.base !== "Pedicure and Manicure"
                            && props.selected.core !== null
                    ?   <ServiceLength handleLength={props.handleLength}/>
                    
                    :   null
                }
            </div>
        </div>
    );
}


function Services (props) {
    let services=["Full Set", "Infill", "Pedicure and Manicure", "Take Off", "Other Services"]
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
    )
}



export {Services}