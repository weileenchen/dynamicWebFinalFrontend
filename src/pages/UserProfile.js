import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostCard from "../components/PostCard";
import { baseUrl } from "../App";

function UserProfile() {
  const [posts, setPosts] = useState([]);
  let { userName } = useParams();

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(function (response) {
        setPosts(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, []);
  const filtered = posts.filter((post) => userName === post.userName);

  return (
    <div className="PageWrapper Page">
      <h1>{userName}'s profile</h1>
      <div className="UserPosts">
        {filtered.map((post, i) => (
          <PostCard post={post} key={i} />
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
