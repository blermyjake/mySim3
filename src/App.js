import React, { Component } from "react";

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
    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header" />
        {this.props.location.pathname !== "/" && <Nav />}

        {routes}
      </div>
    );
  }
}

export default withRouter(App);
