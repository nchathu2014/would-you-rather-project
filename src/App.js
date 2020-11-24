import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import NewQuestion from "./components/NewQuestion";
import WouldYouRatherSelect from "./components/WouldYouRatherSelect";
import WouldYouRatherResults from "./components/WouldYouRatherResults";
import Score from "./components/Score";
import WouldYouRatherView from "./components/WouldYourRatherView";

import {BrowserRouter as Router, Route} from "react-router-dom";

import {getUsersFromBE,getQuestionsFromBE} from "./actions/shared"
import LoadingBar from "react-redux-loading";
import {connect} from "react-redux";
import Home from "./components/Home";
import LeaderBoard from "./components/LeaderBoard";


class App extends Component{

    componentDidMount() {
        this.props.dispatch(getUsersFromBE());
        this.props.dispatch(getQuestionsFromBE());
    }

    render() {
        console.log('==>',this.props.questionIds)
      return (
          <Router>
              <div className="App">
                  <NavBar/>
                  <LoadingBar style={{ backgroundColor: '#28a745', height: '5px' }} />

                  <Route exact path="/" render={()=>(
                      <Login users={this.props.users}/>
                  )}/>

                  <Route path="/home" render={()=>(
                      <Home questionIds = {this.props.questionIds}/>
                  )}/>
                  <Route path="/new-question" render={()=>(
                          <NewQuestion loggedUser={this.props.loggedUser}/>
                  )}/>
                  <Route path="/leader-board" component={LeaderBoard}/>
                  {/*   <NewQuestion/>
        <WouldYouRatherSelect/>
        <WouldYouRatherResults/>
        <Score/>
        <WouldYouRatherView/>*/}
              </div>
          </Router>
      );
  }
}

function mapStateToProps({users,questions,loggedUser}) {


    return{
        users:Object.keys(users),
        questionIds: Object.keys(questions),
        loggedUser
    }
}

export default connect(mapStateToProps,null)(App);
