import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Signup from './account/Signup';
import Signin from './account/Signin';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;