import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor() {
    super();

    this.state = {
      post: []
    };
  }

  componentDidMount() {
    let id = this.props.match.params.postid;
    console.log(id);
    axios
      .post(`/api/userPost/${id}`)
      .then(res => {
        this.setState({ post: res.data });
      })
      .catch(err => console.log(err));
  }

  buttonClickDelete() {
    let id = this.props.match.params.postid;
    console.log(id);
    axios
      .delete(`/api/userPost/?id=${id}`)
      .then(res => {
        this.setState({ post: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props);
    let displaypost = this.state.post.map((display, i) => {
      return (
        <div key={i}>
          <h3>{display.title}</h3>
          <img src={display.img} alt="" />
          <h5>{display.content}</h5>
          <button onClick={e => this.buttonClickDelete()}>Delete</button>
        </div>
      );
    });

    return (
      <div>
        <h1>This is my Post</h1>
        {displaypost}
      </div>
    );
  }
}

export default Post;
