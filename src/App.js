import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./component/Form/Form";
import Auth from "./component/Auth/Auth";
import Nav from "./component/Nav/Nav";
import Post from "./component/Post/Post";
import Dashboard from "./component/Dashboard/Dashboard";

class App extends Component {
  render() {
    console.log("lol jeremy");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Nav />
        <Auth />
        <Dashboard />
        <Post />
        <Form />
      </div>
    );
  }
}

export default App;
