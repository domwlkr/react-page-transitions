import React, { Component } from 'react';
import './Page.css';

class Page extends Component {
    render () {
        var location = this.props.location.pathname;
        console.log(this.props, location);

        return (
            <div className="page">
                <h2>Page!</h2>
            </div>
        );
    }
}

export default Page;