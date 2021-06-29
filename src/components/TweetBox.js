import React from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="/assets/avatar.svg" />
          <input type="text" placeholder="What's happening?" />
        </div>
        <input type="text" className="tweetBox_inputImage" placeholder="Optional: Enter imageURL"  />

        <Button className="tweetBox_btn">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
