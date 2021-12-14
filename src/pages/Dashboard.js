import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";
import { baseUrl } from "../App";

function Dashboard() {
  const [posts, setPosts] = useState([]);

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

  return (
    <div className="PageWrapper">
      <h1>Dashboard</h1>
      {posts.map((post, i) => (
        <PostCard post={post} key={i} />
      ))}
    </div>
  );
}

export default Dashboard;
