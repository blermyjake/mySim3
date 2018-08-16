import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div>
      Nav
      <button>
        <Link to="/dashboard">Home </Link>
      </button>
      <button>
        <Link to="/post/postid">New Post</Link>
      </button>
      <button>
        <Link to="/">Logout</Link>
      </button>
    </div>
  );
}
