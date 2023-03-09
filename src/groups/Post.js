import { Avatar, Badge } from "@mui/material";
import React from "react";
import "./Post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const Post = ({ profilePic, image, username, message, timestamp }) => {
  let dateTime = new Date(timestamp?.toDate()).toUTCString();
  return (
    <div className="post">
      <div className="post__top">
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <Avatar sx={{ width: 24, height: 24 }} src={profilePic} />
          }
        >
          <Avatar src={profilePic} className="post__avatar" variant="rounded" />
        </Badge>
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{dateTime}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
