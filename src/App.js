import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import "./App.css";
import Header from "./components/Header";
import AddPost from "./pages/AddPost";
import CreateUser from "./pages/CreateUser";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Post from "./pages/Post";
import UserProfile from "./pages/UserProfile";
import FirebaseConfig from "./components/FirebaseConfig";

export const baseUrl =
  `https://serene-hollows-61638.herokuapp.com` || `http://localhost:4000`;

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userInformation, setUserInformation] = useState({});
  const [appInitialized, setAppInitialized] = useState(false);
  const [errors, setErrors] = useState();

  useEffect(() => {
    document.title = "finstagram";
    initializeApp(FirebaseConfig);
    setAppInitialized(true);
  }, []);

  useEffect(() => {
    const auth = getAuth();
    if (appInitialized) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserInformation(user);
          setLoggedIn(true);
        } else {
          setUserInformation({});
          setLoggedIn(false);
        }
        setLoading(false);
      });
    }
  }, [appInitialized]);

  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserInformation({});
        setLoggedIn(false);
        setErrors(false);
      })
      .catch((error) => {
        console.warn(error);
        setErrors(error);
      });
  }

  if (loading || !appInitialized) return null;

  return (
    <>
      <Header
        logout={logout}
        loggedIn={loggedIn}
        userInformation={userInformation}
      />
      {errors && <p className="Error PageWrapper">{errors}</p>}
      <Router>
        <Routes>
          <Route
            path="/create"
            element={
              !loggedIn ? (
                <CreateUser
                  setErrors={setErrors}
                  setLoggedIn={setLoggedIn}
                  setUserInformation={setUserInformation}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/login"
            element={
              !loggedIn ? (
                <Login
                  setErrors={setErrors}
                  setLoggedIn={setLoggedIn}
                  setUserInformation={setUserInformation}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/add-post"
            element={
              loggedIn ? (
                <AddPost userInformation={userInformation} />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/post/:id"
            element={loggedIn ? <Post /> : <Navigate to="/" />}
          />

          <Route
            path="/user/:userName"
            element={loggedIn ? <UserProfile /> : <Navigate to="/" />}
          />

          <Route
            path="/"
            element={
              loggedIn ? (
                <Dashboard userInformation={userInformation} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
