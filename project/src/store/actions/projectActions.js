export const createProject = project => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const profile = getState().firebase.profile
  const authorID = getState().firebase.auth.uid
  firestore
    .collection("projects")
    .add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorID,
      createdAt: new Date()
    })
    .then(() => {
      dispatch({ type: "CREATE_PROJECT", payload: project });
    })
    .catch(err => {
      dispatch({ type: "CREATE_PROJECT_FAIL", payload: err });
    });
};
