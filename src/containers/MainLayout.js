import React, { Component } from 'react';
import Header from '../components/Header'
import '../App.css';

class MainLayout extends Component {
    render () {
        return (
            <div className="App">
                <Header />
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default MainLayout;