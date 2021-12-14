import React from "react";

function LoginForm({ loginUser }) {
  return (
    <div>
      <h1>login</h1>
      <div className="Form">
        <form onSubmit={(e) => loginUser(e)}>
          <label htmlFor="email">email</label>
          <input type="email" name="email" placeholder="enter email" />

          <label htmlFor="password">password</label>
          <input type="password" name="password" placeholder="*****" />

          <button type="submit">login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
