import React, { Component } from 'react';
import './Page.css';
import './About.css';

class About extends Component {
    render () {
        return (
            <div className="page about" style={this.props.style}>
                <h2>About!</h2>
            </div>
        );
    }
}

export default About;