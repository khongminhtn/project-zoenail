import React from 'react';

// Deals with small extras of service "shellac" and "long/short"
function ServiceDetails(props) {
    return(
        <div>{this.props.details}</div>
    )
}


// Deals with specific service
class Service extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick=this.handleClick.bind(this) 
        this.state= {
            extendDiv: false
        }
    }

    handleClick(e) {
        e.preventDefault();
        this.state.extendDiv ? this.setState({extendDiv: false}): this.setState({extendDiv: true})
    }

    render() {
        return (
            <div className="Service" onClick={this.handleClick}>
                {this.props.name}
                {
                    this.props.name === "Full Set" 
                    ? this.state.extendDiv 
                        ? <ServiceDetails name="Full Set"/>
                        : null

                    : this.props.name === "Infill" 
                    ? this.state.extendDiv 
                        ? <ServiceDetails name="Infill"/>
                        : null

                    : this.props.name === "Pedicure and Manicure" 
                    ? this.state.extendDiv 
                        ? <ServiceDetails name="Pedicure and Manicure"/>
                        : null

                    : this.props.name === "Take Off" 
                    ? this.state.extendDiv 
                        ? <ServiceDetails name="Take Off"/>
                        : null

                    : this.props.name === "Other Services" 
                    ? this.state.extendDiv 
                        ? <ServiceDetails name="Other Services"/>
                        : null
                    : null
                }
            </div>
        )
    }
}


// Houses all services
class Services extends React.Component{
    constructor() {
        super()
        this.states = {
            selected: ""
        }
    }


    render() {
        return (
            <div>
                <Service name="Full Set" />
                <Service name="Infill" />
                <Service name="Pedicure and Manicure" />
                <Service name="Take Off" />
                <Service name="Other Services" />
            </div>
        )
    }
}

export {Services}