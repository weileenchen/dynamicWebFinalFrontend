import React from "react";

function Header({ logout, loggedIn, userInformation }) {

  const profileRef = `/user/${userInformation.uid}`

  return (
    <header className="HeaderWrapper">
      <div className="Header PageWrapper">
        <h1>finstagram</h1>
        <nav>
          {!loggedIn && (
            <>
              <a href="/">login</a>
              <a href="/create">create user</a>
            </>
          )}
          {loggedIn && (
            <>
              <a href="/">timeline</a>
              <a href={profileRef}>my profile</a>
              <a href="/add-post">new post</a>
              <button className="LogOutButton" onClick={() => logout()}>
                log out
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
