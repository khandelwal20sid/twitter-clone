import React from "react";
import "./RightBar.css"
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function RightBar() {
  return (
    <div className="rightBar">
      <div className="rigthBar_input">
        <SearchIcon className="rightBar_searchIcon" />
        <input placeholder="Search Tweet" type="text" />
      </div>

      <div className="rightBar_container">
        <h2>What's happening</h2>
      
      <TwitterTweetEmbed tweetId={"1337808745695485953"} />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="saurabhnemade"
        options={{ height: 400 }}
      />
      <TwitterShareButton
        url={"https://facebook.com/saurabhnemade"}
        options={{ text: "#reactjs is awesome", via: "saurabhnemade" }}
      />
      </div>
    </div>
  );
}

export default RightBar;
