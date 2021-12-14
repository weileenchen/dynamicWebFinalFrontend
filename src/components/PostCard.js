import React from "react";

function PostCard({ post }) {
  return (
    <header className="PostCard">
      <div className="PostCardImage">
        <img src={post.imageSrc} alt={post.imageAlt} />
      </div>
      <div className="PostCardText">
        <p>{post.userMessage}</p>
        <p>
          Posted by: <a href={`/user/${post.id}`}>{post.userName}</a>
        </p>
        <p>
          <a href={`/post/${post.id}`}>View Post</a>
        </p>
      </div>
    </header>
  );
}

export default PostCard;
