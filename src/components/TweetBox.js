import React, { useState } from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMsg, setTweetMsg] = useState("");
  const [tweetImg, setTweetImg] = useState("");

  const postTweet = (e) =>{
    e.preventDefault();

    db.collection("posts").add({
      diplayName:"Sid",
        username:"khandelwal20sid",
        verified:true,
        text:tweetMsg,
        image:tweetImg,
        avatar:"https://img.pngio.com/avatar-icon-of-flat-style-available-in-svg-png-eps-ai-icon-png-avatar-256_256.png"
    });

    setTweetMsg("");
    setTweetImg("");
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="/assets/avatar.svg" />
          <input
            onChange={(e) => setTweetMsg(e.target.value)}
            value={tweetMsg}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <input
          onChange={(e) => setTweetImg(e.target.value)}
          value={tweetImg}
          type="text"
          className="tweetBox_inputImage"
          placeholder="Optional: Enter imageURL"
        />

        <Button type="submit" onClick={postTweet} className="tweetBox_btn">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
