import React from "react";

function AddPostForm({ submitPost }) {
  return (
    <div>
      <h1>new post</h1>
      <div className="Form">
        <form onSubmit={(e) => submitPost(e)}>
          <label htmlFor="postMessage">post message</label>
          <input type="text" name="postMessage" placeholder="enter message" />

          <label htmlFor="imageSrc">image url</label>
          <input
            type="text"
            name="imageSrc"
            placeholder="insert link to image here"
          />

          <label htmlFor="imageAlt">image alt text</label>
          <input type="text" name="imageAlt" placeholder="alternative text" />

          <button type="submit">create post</button>
        </form>
      </div>
    </div>
  );
}

export default AddPostForm;
