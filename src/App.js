import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import React, {Component, Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";


import {BrowserRouter as Router, Route,Switch} from "react-router-dom";

import {getUsersFromBE,getQuestionsFromBE} from "./actions/shared"
import LoadingBar from "react-redux-loading";
import {connect} from "react-redux";
import NewQuestion from "./components/NewQuestion";
import Dashboard from "./components/Dashboard";
import Results from "./components/Results"
import View from "./components/View"
import LeaderBoard from "./components/LeaderBoard";
import PageNotFound from "./components/PageNotFound";
import Logout from "./components/Logout";
import * as _ from "lodash";


class App extends Component{

    componentDidMount() {
        this.props.dispatch(getUsersFromBE());
    }

    render() {
      return (
          <Router>
              {this.props.loggedUser && <NavBar loggedUser = {this.props.loggedUser}/>}
              <LoadingBar style={{ backgroundColor: '#FFC107', height: '5px' }} />
              <Fragment>

                  <Switch>
                      <Route exact path="/" component={Login}/>
                      <Route exact path="/add" component={NewQuestion}/>
                      <Route exact path="/dashboard" component={Dashboard}/>
                      <Route exact path="/leaderboard" render = {()=>(
                          <LeaderBoard userIds = {this.props.userIds}/>
                      )}/>
                      <Route  exact path="/questions/:id" component={View}/>
                      <Route  exact path="/questions/:id/results" component={Results}/>
                      <Route exact path="/login" component={Login}/>
                      <Route exact path="/logout" component={Logout}/>
                      <Route component={PageNotFound} />
                  </Switch>
              </Fragment>
          </Router>
      );
  }
}

function mapStateToProps({users,loggedUser}) {
    return {
        loggedUser,
        userIds: Object.keys(users),
    }
}

export default connect(mapStateToProps)(App);
