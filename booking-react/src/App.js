import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { Details } from './components/Details';
import { Services } from './components/Services';
import { Confirmation } from './components/Confirmation';
import { FunFacts } from './components/FunFacts'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            base: null,
            core: null,
            extras: null,
            length: null,
            services: [],

            showBasket: false
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
        const updatedServices = this.state.services.slice();
        updatedServices.push({
            base: this.state.base,
            core: e.target.getAttribute("name")
        });

        e.target.getAttribute("name") === "Acrylic"
        || e.target.getAttribute("name") === "Gel Powder"
        || e.target.getAttribute("name") === "Pedicure"
        || e.target.getAttribute("name") === "Manicure"
        || e.target.getAttribute("name") === "Permanent white tips"
        ?   this.setState({core: e.target.getAttribute("name")})
        :   this.setState({
                base: null,
                core: null,
                extras: null,
                length: null,
                services: updatedServices
            })
    };

    handleExtras = (e) => {

        const updatedServices = this.state.services.slice();
        updatedServices.push({
            base: this.state.base,
            core: this.state.core,
            extras: e.target.getAttribute("name")
        });

        this.state.base !== "Spa"
        ?   this.setState({extras: e.target.getAttribute("name")})
        :   this.setState({
                base: null,
                core: null,
                extras: null,
                length: null,
                services: updatedServices
            });
    };

    handleLength = (e) => {
        let updatedServices = this.state.services.slice();
        updatedServices.push({
            base: this.state.base,
            core: this.state.core,
            extras: this.state.extras,
            length: e.target.getAttribute("name")
        });

        this.setState({
            base: null,
            core: null,
            extras: null,
            length: null,
            services: updatedServices
        })
    }

    handleBasket = (e) => {
        this.state.showBasket === false
        ?   this.setState({showBasket: true})
        :   this.setState({showBasket: false})
    }

    render() {
        return (
            <div className="Booking">
                <h1 style={{textShadow: "-4px 8px 10px rgba(0,0,0,0.19)"}}>Booking</h1>
                <FunFacts/>
                <Services 
                    selected={this.state}
                    handleBase={this.handleBase}
                    handleCore={this.handleCore}
                    handleExtras={this.handleExtras}
                    handleLength={this.handleLength}/>

                <Confirmation
                    handleBasket={this.handleBasket}
                    showBasket={this.state.showBasket}
                    services={this.state.services}/>
            </div>
        )
    }
}

export {App}