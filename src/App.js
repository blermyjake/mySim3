import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./component/Nav/Nav";
import routes from "./routes";
import { withRouter } from "react-router-dom";

// import Form from "./component/Form/Form";
// import Auth from "./component/Auth/Auth";
// import Post from "./component/Post/Post";
// import Dashboard from "./component/Dashboard/Dashboard";

class App extends Component {
  render() {
    console.log("lol jeremy");
    return (
      <div className="App">
        <header className="App-header" />

        {routes}
        {this.props.location.pathname !== "/" && <Nav />}
      </div>
    );
  }
}

export default withRouter(App);
