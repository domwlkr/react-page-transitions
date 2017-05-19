import React, { Component } from 'react';
import './Page.css';
import './Home.css';

class Home extends Component {
    render () {
        return (
            <div className="page home" style={this.props.style}>
                <h2>Home!</h2>
            </div>
        );
    }
}

export default Home;