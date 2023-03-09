import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "../StateProvider";
import db, { storage } from "../firebaseApp";
import { collection, doc, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const [imageUpload, setImageUpload] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const colRef = collection(db, "posts");
    if (imageUpload != null) {
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload)
        .then(() => {
          alert("image posted");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
    addDoc(colRef, {
      image: imageUrl,
      message: input,
      profilePic: user.photoURL,
      timestamp: serverTimestamp(),
      username: user.displayName,
    }).then(() => {
      setInput("");
      setImageUrl("");
    });
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="messageSender__input"
            placeholder={`What's in your mind ${user.displayName}?`}
          />
          {/* <input
            type="text"
            placeholder="image URL (Optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          /> */}
          <button type="submit" onClick={handleSubmit}>
            Post
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option uploadFileContainer">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>
            <input
              type="file"
              className="messageSender__option__uploadBtn"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            {/* Photo */}
          </h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
