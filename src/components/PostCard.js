import React from "react";

function PostCard({ post }) {
  return (
    <div className="PostCard">
      <div className="PostTitle">
        <a href={`/user/${post.userName}`}>{post.userName}</a>
      </div>
      <div className="PostCardImage">
        <img src={post.imageSrc} alt={post.imageAlt} />
      </div>
      <div className="PostCardText">
        <div className="PostMessage">
          <b>caption:</b> "{post.postMessage}"
        </div>
        {post.id ? (
          <div className="ViewButtonDiv">
            <a className="ViewButton" href={`/post/${post.id}`}>
              view
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default PostCard;
