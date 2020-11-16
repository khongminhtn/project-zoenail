import React from 'react';
import Service from './components/Services'
import Details from './components/Details'

class App extends React.Component{
    render() {
        return (
            <Service />,
            <Details />
        )
    }
}

export {App}