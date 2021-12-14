import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import AddPostForm from "../components/AddPostForm";
import { baseUrl } from "../App";

function AddPost({ userInformation }) {
  const navigate = useNavigate();

  function submitPost(e) {
    e.preventDefault();

    const postMessage = e.currentTarget.postMessage.value;
    const imageSrc = e.currentTarget.imageSrc.value;
    const imageAlt = e.currentTarget.imageAlt.value;
    const userName = userInformation.displayName;
    const userId = userInformation.uid;

    const url = `${baseUrl}/create?postMessage=${postMessage}&imageSrc=${imageSrc}&imageAlt=${imageAlt}&userName=${userName}&userId=${userId}`;
    axios
      .get(url)
      .then(function (response) {
        navigate("/", { replace: true });
      })
      .catch(function (error) {
        console.warn(error);
      });
  }

  return (
    <div className="PageWrapper Page">
      <AddPostForm submitPost={submitPost} />
    </div>
  );
}

export default AddPost;
