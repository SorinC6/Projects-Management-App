export const signIn = creds => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase
    .auth()
    .signInWithEmailAndPassword(creds.email, creds.password)
    .then(() => {
      dispatch({ type: "LOGIN_SUCCESS" });
    })
    .catch(err => {
      dispatch({ type: "LOGIN_ERROR", payload: err });
    });
};

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: "SIGNOUT_SUCCESS" });
    })
    .catch();
};
