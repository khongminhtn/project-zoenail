import React from 'react';


class Basket extends React.Component {
    render() {
        return(
            <div>
                <div>{this.props.items}</div>
                <button>Choose Time</button>
            </div>
        )
    }
}


function ServiceLength(props) {
    return(
        <div>
            <div onClick={props.handleLength}>Long</div>
            <div onClick={props.handleLength}>Normal</div>
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

                :   props.name === "Permanent white tips"
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
    return(
        <div>
            {
                props.name === "Full Set"
                ?   <div>
                        <div 
                            onClick={props.handleCore} 
                            name="Acrylic"
                        >Acrylic...</div>
                        <div
                            onClick={props.handleCore} 
                            name="Gel Powder"
                        >Gel Powder...</div>
                        <div
                            onClick={props.handleCore} 
                            name="Permanent white tips"
                        >Permanent white tips...</div>
                        <div>Ombre.</div>
                    </div>
                :   props.name === "Infill"
                ?   <div>
                        <div 
                            onClick={props.handleCore} 
                            name="Acrylic"
                        >Acrylic...</div>
                        <div
                            onClick={props.handleCore} 
                            name="Gel Powder"
                        >Gel Powder...</div>
                        <div>Ombre.</div>
                    </div>
                :   props.name === "Pedicure and Manicure"
                ?   <div>
                        <div
                            onClick={props.handleCore}
                            name="Pedicure"
                        >Pedicure...</div>
                        <div
                            onClick={props.handleCore}
                            name="Manicure"
                        >Manicure...</div>
                    </div>
                :   props.name === "Take Off"
                ?   <div>
                        <div>Take off Acrylic.</div>
                        <div>Take off Shellac and re-done.</div>
                        <div>Take off Shellac.</div>
                    </div>
                :   props.name === "Other Services"
                ?   <div>
                        <div>Polish change on natural nails</div>
                        <div>Polish change on existing Acrylic</div>
                        <div>Polish change for feet</div>
                        <div>Acrylic on 2 big toes</div>
                        <div>Infill for 2 big toes</div>
                        <div>Repair for one nail</div>
                        <div>Cut down nail acrylic only</div>
                        <div>10 diamonds</div>
                        <div>Design</div>
                    </div>
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