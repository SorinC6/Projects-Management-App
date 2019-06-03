export const createProject = project => (dispatch, getState) => {
  dispatch({ type: "CREATE_PROJECT", payload: project });
};
