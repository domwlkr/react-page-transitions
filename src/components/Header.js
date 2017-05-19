import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render () {
        return (
            <header className="primary-header">
                <h1>React Page Transitions</h1>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </header>
        );
    }
}

export default Header;