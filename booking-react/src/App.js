import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { Details } from './components/Details';
import { Services } from './components/Services';

function Basket(props) {
    const totalServices = props.services.length;
    const message = `${totalServices} services at £28`
    return(
        <div>
            {message}
        </div>
    );
};

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            base: null,
            core: null,
            extras: null,
            length: null,
            services: []
        };
    };

    handleBase = (e) => {
        this.state.base === e.target.getAttribute('name')
        ?   this.setState({
                base: null,
                core: null,
                extras: null,
                length: null
            })
        :   this.setState({
                base: e.target.getAttribute('name'),
                core: null,
                extras: null,
                length: null
            });
    };

    handleCore = (e) => {
        this.setState({core: e.target.getAttribute("name")});
    };

    handleExtras = (e) => {
        this.setState({extras: e.target.getAttribute("name")});

        let updatedServices = this.state.services;
        updatedServices.push({
            base: this.state.base,
            core: this.state.core,
            extras: this.state.extras
        });

        if (this.state.base === "Pedicure and Manicure") {
            this.setState({
                base: null,
                core: null,
                extras: null,
                length: null,
                services: updatedServices
            })
        };
        console.log("handleExtras is executed")
    };

    handleLength = (e) => {
        let updatedServices = this.state.services;
        updatedServices.push({
            base: this.state.base,
            core: this.state.core,
            extras: this.state.extras,
            length: this.state.length,
        });

        this.setState({
            base: null,
            core: null,
            extras: null,
            length: null,
            services: updatedServices
        })
        console.log("handleLength is executed")
    }

    render() {
        return (
            <div className="Booking">
                <h1>Booking</h1>
                <p>Please choose your desired service</p>
                <Services 
                    selected={this.state}
                    handleBase={this.handleBase}
                    handleCore={this.handleCore}
                    handleExtras={this.handleExtras}
                    handleLength={this.handleLength}/>
                <Basket services={this.state.services}/>
                {console.log(this.state)}
            </div>
        )
    }
}

export {App}