import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { map } from "async";

function Nav(props) {
  return (
    <div>
      Navbar
      <h1 className="App-title" />
      <button>
        <Link to="/dashboard">Home </Link>
      </button>
      <button>
        <Link to="/post/postid">New Post</Link>
      </button>
      <button>
        <Link to="/">Logout</Link>
      </button>
      <h3>{props.user_name}</h3>
      <img src={props.profile.pic} alt="" />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user_name: state.user_name,
    profile_pic: state.profile_pic
  };
}
export default connect(mapStateToProps)(Nav);
