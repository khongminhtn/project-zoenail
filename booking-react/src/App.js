import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import { Details } from './components/Details'
import { FunFacts } from "./components/Funfacts"
import { Services } from './components/Services'

class App extends React.Component{
    render() {
        return (
            <div className="Booking">
                <h1>Booking</h1>
                <FunFacts/>
                <Services />
                <Details />
            </div>
        )
    }
}

export {App}