import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Get from './components/app/get';
import Login from './components/app/login';
import Navbar from './components/app/navbar';
import Register from './components/app/register';
function Main() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/human' component={Get} />
            </Switch>
        </>
    );
}

export default Main;