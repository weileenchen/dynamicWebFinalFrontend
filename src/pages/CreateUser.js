import React, { useCallback } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import CreateUserForm from "../components/CreateUserForm";

function CreateUser({ setErrors, setLoggedIn, setUserInformation }) {
  const signUpUser = useCallback(
    (e) => {
      e.preventDefault();

      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;

      const displayName = e.currentTarget.displayName.value;
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoggedIn(true);
          setUserInformation({
            email: user.email,
            displayName: user.displayName,
            uid: user.uid,
            accessToken: user.accessToken,
          });

          updateProfile(auth.currentUser, {
            displayName,
          })
            .then(() => {
              console.log("successfully signed up");
            })
            .catch((error) => {
              return setErrors(error.errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn({ error, errorCode, errorMessage });
          setErrors(errorMessage);
        });
    },
    [setErrors, setLoggedIn, setUserInformation]
  );

  return (
    <div className="PageWrapper Page">
      <CreateUserForm signUpUser={signUpUser} />
    </div>
  );
}

export default CreateUser;
