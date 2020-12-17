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

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // BOOKING
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

            // DETAILS
            // Form Data:
            name: "",
            phone: "",
            email: ""
        };
    };

    // SERVICES
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


    // DETAILS
    handleForm = (e) => {
        const name = e.target.getAttribute("name");
        name === "Name" 
        ?   this.setState({name: e.target.value})
        :   name === "Phone"
        ?   this.setState({phone: e.target.value})
        :   name === "Email"
        ?   this.setState({email: e.target.value})
        :   console.log("name error");
    };

    componentDidUpdate() {
        console.log(this.state.name, this.state.email, this.state.phone)
    }

    render() {
        return (
            <Router>
                <Heading/>
                <FunFacts
                    selector={this.state.funFacts}/>

                <Route path="/booking">
                    <Services 
                        selected={this.state}
                        handleBase={this.handleBase}
                        handleCore={this.handleCore}
                        handleExtras={this.handleExtras}
                        handleLength={this.handleLength}/>
                </Route>

                <Route path="/detail">
                    <Details
                        handleForm={this.handleForm}/>
                </Route>
                    <Confirmation
                        handleBasket={this.handleBasket}
                        showBasket={this.state.showBasket}
                        services={this.state.services}
                        totalPrice={this.state.totalPrice}/>
            </Router>

        )
    }
}

export {App}