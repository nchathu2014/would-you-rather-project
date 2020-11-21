import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import NewQuestion from "./components/NewQuestion";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Login/>
      <NewQuestion/>
    </div>
  );
}

export default App;
