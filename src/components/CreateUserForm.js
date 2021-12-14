import React from "react";

function CreateUserForm({ signUpUser }) {
  return (
    <div>
      <h1>create profile</h1>
      <div className="Form">
        <form onSubmit={(e) => signUpUser(e)}>
          <label htmlFor="displayName">username</label>
          <input type="text" name="displayName" placeholder="enter name" />

          <label htmlFor="email">email</label>
          <input type="email" name="email" placeholder="enter email" />

          <label htmlFor="password">password</label>
          <input type="password" name="password" placeholder="*****" />

          <button type="submit">sign up</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUserForm;
