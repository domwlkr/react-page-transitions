import React, { Component } from 'react';
import { RouteTransition } from 'react-router-transition';
import { Route, Switch } from 'react-router';

import Header from '../components/Header';
import Home from './Home';
import About from './About';

import './MainLayout.css';
import './Page.css';

class MainLayout extends Component {
    render () {
        return (
            <div className="App">
                <Header />
                <main className="main">
                    <Route render={({location, history, match}) => {
                        return (
                            <RouteTransition
                                pathname={this.props.location.pathname}
                                atEnter={{ translateX: 100 }}
                                atLeave={{ translateX: -100 }}
                                atActive={{ translateX: 0 }}
                                mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
                                >
                                <Switch key={location.key} location={location}>
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/about/" component={About}/>
                                </Switch>
                            </RouteTransition>
                        );
                    }} />
                </main>
            </div>
        );
    }
}

export default MainLayout;