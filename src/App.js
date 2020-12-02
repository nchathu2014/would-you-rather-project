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
import * as _ from "lodash";


class App extends Component{

    componentDidMount() {
        this.props.dispatch(getUsersFromBE());
        //this.props.dispatch(getQuestionsFromBE());
    }

    render() {
      return (
          <Router>

              <Fragment>

                  {this.props.loggedUser && <NavBar loggedUser = {this.props.loggedUser}/>}
                  <LoadingBar style={{ backgroundColor: '#FFC107', height: '5px' }} />
                  <Switch>

                      <Route exact path="/login" component={Login}/>
                      <Route exact path="/new-question" component={NewQuestion}/>
                      <Route exact path="/dashboard" component={Dashboard}/>
                      <Route exact path="/leader-board" render = {()=>(
                          <LeaderBoard userIds = {this.props.userIds}/>
                      )}/>

                      <Route  exact path="/questions/:id" component={View}/>
                      <Route  exact path="/questions/:id/results" component={Results}/>
                      <Route component={PageNotFound} />
                  </Switch>
              </Fragment>
          </Router>
      );
  }
}

function mapStateToProps({users,questions,loggedUser}) {

    console.log('###############users',users)
    //_.orderBy(users, ['timestamp'],['desc']);
    console.log('########### ORDERED',)
    return{
        loggedUser,
        userIds: Object.keys(users),
        /*users: Object.keys(users).map(userId => users[userId]),
        userIds: Object.keys(users),
        questions: Object.keys(questions).map(questionId => questions[questionId]),
        loggedUser*/
    }
}

export default connect(mapStateToProps,null)(App);
