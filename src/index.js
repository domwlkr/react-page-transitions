import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Route } from 'react-router-dom';

import MainLayout from './containers/MainLayout';
import Home from './containers/Home';
import About from './containers/About';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
    <Router>
        <MainLayout>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </MainLayout>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
