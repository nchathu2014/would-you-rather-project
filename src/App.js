import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import NewQuestion from "./components/NewQuestion";
import WouldYouRatherSelect from "./components/WouldYouRatherSelect";
import WouldYouRatherResults from "./components/WouldYouRatherResults";
import Score from "./components/Score";
import WouldYouRatherView from "./components/WouldYourRatherView";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Login/>
      <NewQuestion/>
        <WouldYouRatherSelect/>
        <WouldYouRatherResults/>
        <Score/>
        <WouldYouRatherView/>
    </div>
  );
}

export default App;
