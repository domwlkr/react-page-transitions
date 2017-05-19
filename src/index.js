import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainLayout from './containers/MainLayout';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render((
    <Router>
        <Route component={MainLayout} />
    </Router>
), document.getElementById('root'));
registerServiceWorker();
