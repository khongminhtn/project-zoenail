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

function ServiceExtras(props) {
    return(
        <div>
            {
                props.name === "Acrylic" || props.name === "Gel Powder"
                ?   <div>
                        <div>With Shellac</div>
                        <div>Without Shellac</div>
                    </div>
                :   props.name === "Permanent white tips"
                ?   <div>
                        <div>With UV top coat</div>
                        <div>Without UV top coat</div>
                    </div>
                :   null
            }
        </div>
    )
}

class ServiceCore extends React.Component {
    render() {
        return(
            <div>
                {
                    this.props.name === "Full Set"
                    ?   <div>
                            <div>Acrylic...</div>
                            <div>Gel Powder...</div>
                            <div>Permanent white tips...</div>
                            <div>Ombre.</div>
                        </div>
                    :   this.props.name === "Infill"
                    ?   <div>
                            <div>Acrylic...</div>
                            <div>Gel Powder...</div>
                            <div>Ombre.</div>
                        </div>
                    :   this.props.name === "Pedicure and Manicure"
                    ?   <div>
                            <div>Pedicure...</div>
                            <div>Manicure...</div>
                        </div>
                    :   this.props.name === "Take Off"
                    ?   <div>
                            <div>Take off Acrylic.</div>
                            <div>Take off Shellac and re-done.</div>
                            <div>Take off Shellac.</div>
                        </div>
                    :   this.props.name === "Other Services"
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
        )
    }
}


function ServiceBase(props) {
    const services = Object.values(props.selected);
    return(
        <div className="Service">

            <div 
                onClick={props.handleBase}
                name={props.name}
            >{props.name}</div>


            <div>
                {
                        (props.name === props.selected.base 
                            && props.selected.core === null)
                    ?   <ServiceCore name={props.name}/>
                    :   (props.name === props.selected.base
                            && props.selected.core !== null)
                    ?   <ServiceExtras name={props.selected.core}/>
                    :   null
                }
            </div>

        </div>
    )
}


class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            base: null,
            core: null,
            extras: null,
            length: null
        }
    }

    handleBase = (e) => {
        this.state.base === e.target.getAttribute('name')
        ?   this.setState({
                base: null,
                core: null,
                extras: null,
                length: null
            })
        :   this.setState({base: e.target.getAttribute('name')})
    }

    handleCore = (e) => {
        
    }

    render() {
        return(
            <div>
                <ServiceBase 
                    handleBase={this.handleBase}
                    selected={this.state} 
                    name="Full Set"/>
                <ServiceBase 
                    handleBase={this.handleBase}
                    selected={this.state} 
                    name="Infill"/>
                <ServiceBase 
                    handleBase={this.handleBase}
                    selected={this.state}
                    name="Pedicure and Manicure"/>
                <ServiceBase 
                    handleBase={this.handleBase}
                    selected={this.state} 
                    name="Take Off"/>
                <ServiceBase 
                    handleBase={this.handleBase}
                    selected={this.state} 
                    name="Other Services"/>
            </div>
        )
    }
}


export {Services}