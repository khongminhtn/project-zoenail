import React from 'react';

function ServiceDetails(props) {
    return(
        <div>{this.props.details}</div>
    )
}

function Service(props) {
    return (
        <div>{props.name}</div>
    )
}

class Services extends React.Component{
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