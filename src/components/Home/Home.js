import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUser, logout } from "../../ducks/authReducer";
import { getPosts } from "../../ducks/reducer";
import axios from "axios";
import Header from "../Header/Header";
import Post from "../Post/Post";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      loggedIn: false
    };
  }

  componentDidMount() {
    this.props.getUser();
    this.props.getPosts();
    console.log(this.props.user);
    if (this.props.user.username) {
      return this.setState({ loggedIn: true });
    }
  }

  render() {
    const { logout, user, posts } = this.props;
    console.log(this.props.posts);
    const timeline = posts.map((e, i) => {
      return (
        <Post
          key={i}
          username={e.username}
          img={e.url}
          caption={e.caption}
          date={e.upload_date}
          time={e.upload_time}
          avatar={e.avatar}
        />
      );
    });

    console.log(user.username);
    console.log(this.state.loggedIn);
    return (
      <div className="home">
        <Header
          link={this.state.home}
          loggedIn={this.state.loggedIn}
          logout={logout}
          user={user}
        />
        {timeline}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state.authReducer;
  const { posts } = state.reducer;
  return {
    user,
    posts
  };
};

export default connect(
  mapStateToProps,
  { getUser, logout, getPosts }
)(Home);
