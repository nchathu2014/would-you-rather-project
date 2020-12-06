import React, {Fragment, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import LoadingBar from "react-redux-loading";

import NavBar from "./components/NavBar";
import Login from "./components/Login";
import NewQuestion from "./components/NewQuestion";
import Dashboard from "./components/Dashboard";
import Results from "./components/Results"
import View from "./components/View"
import LeaderBoard from "./components/LeaderBoard";
import PageNotFound from "./components/PageNotFound";
import Logout from "./components/Logout";
import ProtectedRoute from "./routes/ProtectedRoute";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {getQuestionsFromBE, getUsersFromBE} from "./actions/shared"

function App(props) {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsersFromBE());
        dispatch(getQuestionsFromBE())
    }, [dispatch]);

    const {loggedUser, authenticated} = props.loggedUser;

    return (
        <Router>
            <Fragment>
                {authenticated == null ? null : <NavBar loggedUser={loggedUser}/>}
                <LoadingBar style={{backgroundColor: '#FFC107', height: '5px'}}/>
                {props.loading === true ? null :
                    (
                        <Switch>
                            <ProtectedRoute
                                exact path="/"
                                component={Dashboard}
                                isAuthenticated={authenticated}
                            />
                            <ProtectedRoute
                                exact
                                path="/add"
                                component={NewQuestion}
                                isAuthenticated={authenticated}
                            />
                            <ProtectedRoute
                                exact
                                path="/leaderboard"
                                isAuthenticated={authenticated}
                                component={connect(mapStateToProps)(LeaderBoard)}/>
                            <ProtectedRoute
                                exact
                                isAuthenticated={authenticated}
                                path="/questions/:id"
                                component={connect(mapStateToProps)(View)}
                            />
                            <ProtectedRoute
                                exact
                                isAuthenticated={authenticated}
                                path="/questions/:id/results"
                                component={connect(mapStateToProps)(Results)}
                            />
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/logout" component={Logout}/>
                            <Route component={PageNotFound}/>
                        </Switch>
                    )}

            </Fragment>
        </Router>
    );
}

function mapStateToProps({users, loggedUser}) {
    return {
        loading: false,
        loggedUser,
        userIds: Object.keys(users)
    }
}

export default connect(mapStateToProps)(App);
