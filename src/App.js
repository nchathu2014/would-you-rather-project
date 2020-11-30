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
import Home from "./components/Home";
import Results from "./components/Results"
import View from "./components/View"
import LeaderBoard from "./components/LeaderBoard";
import PageNotFound from "./components/PageNotFound";


class App extends Component{

    componentDidMount() {
        this.props.dispatch(getUsersFromBE());
        this.props.dispatch(getQuestionsFromBE());
    }

    render() {
      return (
          <Router>
              <div className="App">

                  <LoadingBar style={{ backgroundColor: '#28a745', height: '5px' }} />

                  <Route exact path="/" render={()=>(
                      <Login users={this.props.users}/>
                  )}/>

                  {this.props.loggedUser &&
                  <Fragment>
                      <Switch>

                      </Switch>
                      <NavBar/>
                      <Route exact path="/new-question" component={NewQuestion}/>
                      <Route exact path="/home" component={Home}/>
                      <Route exact path="/leader-board" render = {()=>(
                          <LeaderBoard userIds = {this.props.userIds}/>
                      )}/>

                      <Route  exact path="/questions/:id" component={View}/>
                      <Route  exact path="/questions/:id/results" component={Results}/>
                      <Route component={PageNotFound} />
                  </Fragment>
                  }


              </div>
          </Router>
      );
  }
}

function mapStateToProps({users,questions,loggedUser}) {
    return{
        users: Object.keys(users).map(userId => users[userId]),
        userIds: Object.keys(users),
        questions: Object.keys(questions).map(questionId => questions[questionId]),
        loggedUser
    }
}

export default connect(mapStateToProps,null)(App);
