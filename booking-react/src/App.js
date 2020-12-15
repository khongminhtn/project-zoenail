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
import { FunFacts } from './components/FunFacts';
import { Heading } from './components/Heading';
import { Button } from "./components/Button";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // Selected services
            base: null,
            core: null,
            extras: null,
            length: null,
            price: 0,
            
            // Service ordered
            services: [],
            totalPrice: 0,

            // Order confirmation
            showBasket: false,
            
            // Displaying fun facts
            funFacts: Math.floor(Math.random() * 16 + 1),

            // Animation
            baseHeight: 50
        };
    };

    handleBaseAnimation = (e) => {
        this.state.base === e.target.getAttribute("name")
        && this.state.base === "Full Set"
        ?   this.setState({baseHeight: 216})
            
        :   this.state.base === e.target.getAttribute("name")
            && this.state.base === "Infill"
        ?   this.setState({baseHeight: 177})

        :   this.state.base === e.target.getAttribute("name")
            && this.state.base === "Spa"
        ?   this.setState({baseHeight: 138})

        :   this.state.base === e.target.getAttribute("name")
            && this.state.base === "Take Off"
        ?   this.setState({baseHeight: 138})

        :   this.state.base === e.target.getAttribute("name")
            && this.state.base === "Other Services"
        ?   this.setState({baseHeight: 528})
        
        :   this.state.base === null
        ?   this.setState({baseHeight: 50})
        :   console.log("baseHeight Error")
    }

    handleBase = (e) => {
        this.state.base === e.target.getAttribute('name')
        ?   this.setState({
                base: null,
                core: null,
                extras: null,
                length: null,
                price: 0,
            })
        :   this.setState({
                base: e.target.getAttribute('name'),
                core: null,
                extras: null,
                length: null,
            });
    };

    handleCore = (e) => {
        const updatedServices = this.state.services.slice();
        updatedServices.push({
            base: this.state.base,
            core: e.target.getAttribute("name")
        });

        const price = this.state.price + parseInt(e.target.getAttribute("Price"))

        e.target.getAttribute("name") === "Acrylic"
        || e.target.getAttribute("name") === "Gel Powder"
        || e.target.getAttribute("name") === "Pedicure"
        || e.target.getAttribute("name") === "Manicure"
        || e.target.getAttribute("name") === "Permanent white tips"
        || e.target.getAttribute("name") === "Ombre"
        ?   this.setState({
            core: e.target.getAttribute("name"),
            price: price
        })

        :   this.setState({
                base: null,
                core: null,
                extras: null,
                length: null,
                price: 0,

                services: updatedServices,
                totalPrice: this.state.totalPrice + price
            })
    };

    handleExtras = (e) => {

        const updatedServices = this.state.services.slice();
        updatedServices.push({
            base: this.state.base,
            core: this.state.core,
            extras: e.target.getAttribute("name")
        });

        const price = this.state.price + parseInt(e.target.getAttribute("Price"))
        this.state.base !== "Spa"
        ?   this.setState({
                extras: e.target.getAttribute("name"),
                price: price
            })
        
        :   this.setState({
                base: null,
                core: null,
                extras: null,
                length: null,
                price: 0,

                services: updatedServices,
                totalPrice: this.state.totalPrice + price
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

        const price = this.state.price + parseInt(e.target.getAttribute("Price"))
        
        this.setState({
            base: null,
            core: null,
            extras: null,
            length: null,
            price: 0,

            services: updatedServices,
            totalPrice: this.state.totalPrice + price
        });
    };

    handleBasket = (e) => {
        this.state.showBasket === false
        ?   this.setState({showBasket: true})
        :   this.setState({showBasket: false})
    };

    render() {
        return (
            <div className="Booking">
                <Heading/>
                <FunFacts
                    selector={this.state.funFacts}/>
                    
                <Services 
                    selected={this.state}
                    handleBase={this.handleBase}
                    handleCore={this.handleCore}
                    handleExtras={this.handleExtras}
                    handleLength={this.handleLength}
                    baseHeight={this.state.baseHeight}
                    handleBaseAnimation={this.handleBaseAnimation}/>

                <Confirmation
                    handleBasket={this.handleBasket}
                    showBasket={this.state.showBasket}
                    services={this.state.services}
                    totalPrice={this.state.totalPrice}/>
            </div>
        )
    }
}

export {App}