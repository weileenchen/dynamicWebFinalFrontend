import React from "react";

function AddPostForm({ submitPost }) {
  return (
    <div>
      <h2>Add Post Form</h2>
      <div className="Form">
        <form onSubmit={(e) => submitPost(e)}>
          <label htmlFor="postMessage">Post Message</label>
          <input type="text" name="postMessage" placeholder="Enter message" />

          <label htmlFor="imageSrc">Image URL</label>
          <input
            type="text"
            name="imageSrc"
            placeholder="https://wp.cghnyc.com/media/nyu-m-hero.jpg"
          />

          <label htmlFor="imageAlt">Image Alt Text</label>
          <input type="text" name="imageAlt" placeholder="Alt text for email" />

          <button type="submit">Create Post</button>
        </form>
      </div>
    </div>
  );
}

export default AddPostForm;
