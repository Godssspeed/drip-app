import React, { Component } from "react";
import "./Post.css";

class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { username, img, caption, date, time, avatar } = this.props;
    return (
      <div className="post">
        <div className="user">
          <img className="avatar" src={avatar} alt={`${username}'s avatar.`} />
          <h3 className="username">{username}</h3>
        </div>
        <img className="post-img" src={img} alt={`${username}'s posts`} />
        <div className="caption-section">
          <span className="like-btn">💧</span>
          <p className="caption">{caption}</p>
        </div>
      </div>
    );
  }
}

export default Post;
