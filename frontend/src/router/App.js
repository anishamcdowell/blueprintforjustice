import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from '../components/Form';
import Resources from '../pages/resources';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route component={Form} path='/' exact={true} />
                    <Resources />
                </Switch>
            </div>
        </Router>
    )
}

export default App