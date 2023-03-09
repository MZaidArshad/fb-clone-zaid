import React from "react";
import Story from "./Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://picsum.photos/200/300"
        profileSrc="https://i.pravatar.cc/150?img=3"
        title="James"
      />
      <Story
        image="https://placebear.com/640/360"
        profileSrc="https://i.pravatar.cc/150?img=4"
        title="Bob"
      />
      <Story
        image="https://picsum.photos/640/360"
        profileSrc="https://i.pravatar.cc/150?img=6"
        title="Spider Man"
      />
      <Story
        image="https://loremflickr.com/640/360"
        profileSrc="https://i.pravatar.cc/150?img=7"
        title="Bat Man"
      />
    </div>
  );
};

export default StoryReel;
