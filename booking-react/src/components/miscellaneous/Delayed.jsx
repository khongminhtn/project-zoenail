import React from 'react';
import propTypes from 'prop-types';

export default class Delayed extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {hidden : true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: false});
        }, this.props.waitBeforeShow);
    }   

    render() {
        return this.state.hidden ? "" : this.props.children
    }
}

Delayed.propTypes = {
    waitBeforeShow: propTypes.number.isRequired
};