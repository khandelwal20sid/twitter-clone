import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      {/* header */}

      <div className="feed_header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      {/* tweetbox */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

      {/* post */}
    </div>
  );
}

export default Feed;
