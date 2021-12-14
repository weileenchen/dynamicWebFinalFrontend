import React from "react";

function Header({ logout, loggedIn }) {
  return (
    <header className="HeaderWrapper">
      <div className="Header PageWrapper">
        <h1>Title</h1>
        <nav>
          {!loggedIn && (
            <>
              <a href="/">Login</a>
              <a href="/create">Create User</a>
            </>
          )}
          {loggedIn && (
            <>
              <a href="/">Dashboard</a>
              <a href="/user/:id">User Profile</a>
              <a href="/add-post">Add Post</a>
              <button onClick={() => logout()}>Log Out</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
