import React, { Component } from 'react';
import Header from '../components/Header'
import './MainLayout.css';

class MainLayout extends Component {
    render () {
        return (
            <div className="App">
                <Header />
                <main className="main">
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default MainLayout;