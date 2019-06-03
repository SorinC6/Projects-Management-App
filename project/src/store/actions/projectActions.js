export const createProject = project => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  firestore
    .collection("projects")
    .add({
      ...project,
      authorFirstName: "Pacala",
      authorLastName: "Ion",
      authorId: 12345,
      createdAt: new Date()
    })
    .then(() => {
      dispatch({ type: "CREATE_PROJECT", payload: project });
    })
    .catch(err => {
      dispatch({ type: "CREATE_PROJECT_FAIL", payload: err });
    });
};
