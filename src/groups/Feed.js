import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import db from "../firebaseApp";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const q = query(colRef, orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  return (
    <div className="feed">
      <div className="feed__heading">
        <h4>Recent activity</h4>
      </div>
      {/* POsts */}
      {posts
        .filter((post) => {
          return post.data.image !== "";
        })
        .map((post) => (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            username={post.data.username}
            image={post.data.image}
            timestamp={post.data.timestamp}
          />
        ))}
    </div>
  );
};

export default Feed;
