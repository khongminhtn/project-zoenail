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

class ServiceExtras extends React.Component {
    constructor(props)  {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state={
            extend: false,
        }
    }

    handleClick(event)  {
        this.state.extend === false
        ?   this.setState({extend: true})
        :   this.setState({extend: false})
    }

    render() {
        return(
            <div>
                <div onClick={this.handleClick}>{this.props.name}</div>
                {
                    this.state.extend === true
                    ?   (
                            this.props.name === "Acrylic..." 
                            || this.props.name === "Gel Powder..."
                        )
                        ?   <div>
                                <div>With shellac</div>
                                <div>Without shellac</div>
                            </div>
                        :   this.props.name === "Permanent white tips..."
                        ?   <div>
                                <div>With UV top coat</div>
                                <div>Wihtout UV top coat</div>
                            </div>
                        :(
                            this.props.name === "Pedicure..." 
                            || this.props.name === "Manicure..."
                        )
                        ?   <div>
                                <div>With shellac</div>
                                <div>Without shellac</div>
                            </div>
                        :   null
                    :   null
                }
            </div>
        )
    }
}

class ServiceCore extends React.Component {
    render() {
        return(
            <div>
                {
                    this.props.name === "Full Set"
                    ?   <div>
                            <ServiceExtras name="Acrylic..."/>
                            <ServiceExtras name="Gel Powder..."/>
                            <ServiceExtras name="Permanent white tips..."/>
                            <div>Ombre.</div>
                        </div>
                    :   this.props.name === "Infill"
                    ?   <div>
                            <ServiceExtras name="Acrylic..."/>
                            <ServiceExtras name="Gel Powder..."/>
                            <div>Ombre.</div>
                        </div>
                    :   this.props.name === "Pedicure and Manicure"
                    ?   <div>
                            <ServiceExtras name="Pedicure..."/>
                            <ServiceExtras name="Manicure..."/>
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


class ServiceBase extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            extend: false
        }
    }

    handleClick(event){
        this.state.extend === false
        ?   this.setState({extend: true})
        :   this.setState({extend: false})
    }

    render() {
        return(
            <div className="Service">
                <div onClick={this.handleClick}>{this.props.name}</div>
                {
                    this.state.extend === true
                    ?   <ServiceCore name={this.props.name}/>
                    :   null
                }
            </div>
        )
    }
}


class Services extends React.Component {
    render() {
        return(
            <div>
                <ServiceBase name="Full Set"/>
                <ServiceBase name="Infill"/>
                <ServiceBase name="Pedicure and Manicure"/>
                <ServiceBase name="Take Off"/>
                <ServiceBase name="Other Services"/>
            </div>
        )
    }
}


export {Services}