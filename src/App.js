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

import {getUsersFromBE} from "./actions/shared"
import LoadingBar from "react-redux-loading";
import {connect} from "react-redux";

class App extends Component{

    componentDidMount() {
        this.props.dispatch(getUsersFromBE());
    }

    render() {
      return (
          <div className="App">
              <NavBar/>
              <LoadingBar/>
              <Login users={this.props.users}/>
              {/*   <NewQuestion/>
        <WouldYouRatherSelect/>
        <WouldYouRatherResults/>
        <Score/>
        <WouldYouRatherView/>*/}
          </div>
      );
  }
}

function mapStateToProps({users}) {
    return{
        users:Object.keys(users)
    }
}

export default connect(mapStateToProps,null)(App);
