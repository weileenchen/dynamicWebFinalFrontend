import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import { baseUrl } from "../App";

function Post() {
  const [singlePost, setSinglePost] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${baseUrl}/post/${id}`)
      .then(function (response) {
        console.log({ response });
        setSinglePost(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, [id]);

  return (
    <div className="PageWrapper Page">
      <h1>post</h1>
      <PostCard post={singlePost} />
    </div>
  );
}

export default Post;
