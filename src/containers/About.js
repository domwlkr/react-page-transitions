import React, { Component } from 'react';
import './Page.css';
import './About.css';

class About extends Component {
    render () {
        return (
            <div key="about" className="page about">
                <h2>About!</h2>
            </div>
        );
    }
}

export default About;