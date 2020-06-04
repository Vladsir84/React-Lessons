import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Users from './Users';
import Home from './Home';

const App = () => {
    return (
        <div className="page">
            <ul className="navigation">
                <li className="navigation__item">
                    <Link to="/">Home</Link>

                </li>
                <li className="navigation__item">
                    <Link to="/users">Users</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/users" component={Users} />
            </Switch>
        </div>
    );
};


export default App;