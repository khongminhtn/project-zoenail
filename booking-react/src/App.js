import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import { Services } from './components/Services'
import { Details } from './components/Details'

class App extends React.Component{
    render() {
        return (
            <div>
                <Services />
                <Details />
            </div>
        )
    }
}

export {App}