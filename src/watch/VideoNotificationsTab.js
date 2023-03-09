import React from "react";
import VideoNotification from "./VideoNotification";
import "./VideoNotificationsTab.css";

const VideoNotificationsTab = () => {
  return (
    <div className="VideoNotificationsTab">
      <h3>New Videos for you. 2</h3>
      <div className="VideoNotificationsTab__notifications">
        <VideoNotification
          pageProfilePic="https://i.pravatar.cc/150?img=13"
          notificationTitle="New videos from Lahore Rang and others."
          time="2 hours ago"
        />
        <VideoNotification
          pageProfilePic="https://i.pravatar.cc/150?img=18"
          notificationTitle="BOL and other have gone live"
          time="about an hour ago"
        />
      </div>
    </div>
  );
};

export default VideoNotificationsTab;
