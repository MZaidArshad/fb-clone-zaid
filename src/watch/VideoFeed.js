import React from "react";
import Video from "./Video";
import "./VideoFeed.css";
import VideoNotificationsTab from "./VideoNotificationsTab";

const VideoFeed = () => {
  return (
    <div className="videoFeed">
      <VideoNotificationsTab />
      {/* Videos */}
      <Video
        key={1}
        profilePic="https://i.pravatar.cc/150?img=13"
        message="first video"
        username="Zaidi"
        videoURL="./10006.mp4"
        timestamp="Time stamp"
      />
      <Video
        key={2}
        profilePic="https://i.pravatar.cc/150?img=13"
        message="first video"
        username="Zaidi"
        videoURL="./v2.mp4"
        timestamp="Time stamp"
      />
      <Video
        key={3}
        profilePic="https://i.pravatar.cc/150?img=13"
        message="first video"
        username="Zaidi"
        videoURL="./v3.mp4"
        timestamp="Time stamp"
      />
    </div>
  );
};

export default VideoFeed;
