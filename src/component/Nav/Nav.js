import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { map } from "async";
import axios from "axios";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      userID: "",
      username: ""
    };
  }

  componentDidMount() {
    axios.get("/api/getSession").then(res => {
      console.log(res);
      this.setState({ userID: res.data.id, username: res.data.username });
    });
  }

  // handleLogout() {
  //   axios.post("api/auth/logout").then(res => {
  //     this.setState({ userID: "", username: "" });
  //   });
  // }

  render() {
    // console.log(this.props);
    // console.log(this.state);
    return (
      <div>
        Navbar
        {/* <h1 className="App-title" /> */}
        <button>
          <Link to="/dashboard">Home </Link>
        </button>
        <button>
          <Link to="/post/postid">New Post</Link>
        </button>
        <button>
          <Link to="/">Logout</Link>
        </button>
        {/* username coming from session */}
        <h3>{this.state.username}</h3>
        <h3>
          {`ID No. 
          ${this.props.id}`}
        </h3>
        <img src={this.props.profile_pic} alt="" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(Nav);
