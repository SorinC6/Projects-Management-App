export const signIn = creds => (dispatch, { getFirebase }) => {
  const getFirebase = getFirebase();

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
