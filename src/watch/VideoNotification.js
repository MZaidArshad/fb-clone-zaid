import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./VideoNotification.css";
import CircleIcon from "@mui/icons-material/Circle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const VideoNotification = ({ pageProfilePic, notificationTitle, time }) => {
  return (
    <div className="VideoNotification">
      <Avatar className="VideoNotification__pageAvatar" src={pageProfilePic} />
      <div className="VideoNotification__info">
        <p>{notificationTitle}</p>
        <span className="VideoNotification__info__time">
          <CircleIcon className="VideoNotification__info__activeCircle" />
          {time}
        </span>
      </div>
      <div className="VideoNotification__moreBtns">
        <IconButton className="VideoNotification__moreBtn">
          <MoreHorizIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default VideoNotification;
