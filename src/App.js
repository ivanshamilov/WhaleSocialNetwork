import React, {Component, useState, useCallback} from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import MainNavigation from "./shared/navigation/MainNavigation";
import Friends from "./shared/friends/pages/Friends";


import { AuthContext } from "./util/ auth-context";
import LoadingSpinner from './util/components/LoadingSpinner';
import People from './shared/people/pages/People';
import Auth from './shared/auth/pages/Auth';


const App = props => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    let routes;

    if (isLoggedIn){
        routes = (
            <Switch>
                <Route path='/feed' exact>
                    <div>Feed</div>
                </Route>
                <Route path='/friends' exact>
                    <div>Friends</div>
                </Route>
                <Route path='/messages' exact>
                    <div>Messages</div>
                </Route>
                <Route path='/account' exact>
                    <div>Account</div>
                </Route>
                <Route path='/discover' exact>
                    <People />
                </Route>
                <Route path='/' exact>
                    <div className="center">Whale Social Network</div>
                </Route>
                <Redirect to="/"/>
            </Switch>
        )
    } else {
        routes = (
            <Switch>
                <Route path="/login">
                    <Auth />
                </Route>
                <Route path="/Discover">
                     <People />
                </Route>
                <Route path='/' exact>
                    <div className="center">Whale Social Network</div>
                </Route>
                <Redirect to="/login"/>
            </Switch>
        )
    }

        return (
            <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout}}>
                <Router>
                    <MainNavigation/>
                    <main>
                        {routes}
                    </main>
                </Router>
            </AuthContext.Provider>
        )
};

export default App;