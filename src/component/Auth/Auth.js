import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {
  reducerID,
  reducerProfilePic,
  reducerUserName
} from "../../ducks/reducer";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false
    };
    this.updateUserName = this.updateUserName.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleGetUser = this.handleGetUser.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
  }

  updateUserName(username) {
    this.setState({ username });
  }

  updatePassword(password) {
    this.setState({ password });
  }

  handleGetUser() {
    let { username, password } = this.state;
    // console.log(username, password);
    axios
      .post("/api/getUser", { username, password })
      .then(res => {
        this.props.reducerID(res.data[0].id);
        this.props.reducerUserName(res.data[0].username);
        this.props.reducerProfilePic(res.data[0].profile_pic);
        this.setState({ redirect: true });
      })
      .catch(err => err);
  }

  handleAddUser() {
    let { username, password } = this.state;

    axios
      .post("/api/addUser", { username, password })
      .then(response => {
        // console.log(response);
        this.props.reducerID(response.data[0].id);
        this.props.reducerUserName(response.data[0].username);
        this.props.reducerProfilePic(response.data[0].profile_pic);
        this.setState({ redirect: true });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    // console.log(this.props);
    let { username, password } = this.state;
    return (
      <div>
        <h2>Auth</h2>
        <input
          className="userName"
          placeholder="User Name"
          value={username}
          onChange={e => this.updateUserName(e.target.value)}
        />
        <input
          className="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => this.updatePassword(e.target.value)}
        />
        <button onClick={this.handleGetUser} className="LoginButton">
          Login
        </button>

        <button onClick={this.handelAddUser} className="RegisterButton">
          Register
        </button>
        {this.state.redirect && <Redirect to="/dashboard" />}
      </div>
    );
  }
}

export default connect(
  null,
  { reducerID, reducerProfilePic, reducerUserName }
)(Auth);
