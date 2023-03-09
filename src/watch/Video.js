import React from "react";
import "./Video.css";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const Video = ({ profilePic, videoURL, username, message, timestamp }) => {
  //   let dateTime = new Date(timestamp?.toDate()).toUTCString();
  return (
    <div className="video">
      <div className="video__top">
        <Avatar src={profilePic} className="video__avatar" />
        <div className="video__topInfo">
          <h3>{username}</h3>
          <p>dateTime</p>
        </div>
      </div>
      <div className="video__bottom">
        <p>{message}</p>
      </div>
      <div className="video__video">
        <video src={videoURL} alt="" controls />
      </div>
      <div className="video__options">
        <div className="video__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="video__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="video__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="video__option">
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Video;
