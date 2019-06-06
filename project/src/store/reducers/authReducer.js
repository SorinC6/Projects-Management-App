const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      //console.log("ERROR LOginnnnnn");
      return {
        ...state,
        authError: "LOGIN ERROR"
      };
    case "LOGIN_SUCCESS":
      //console.log("Login Success");
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      //console.log("SIgnout success");
      return state;
    case "SIGNUP_SUCCESS":
      //console.log("signup Success");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      //console.log("ERROR SIGNUP");
      return {
        ...state,
        authError: action.payload.message
      };
    default:
      return state;
  }
};

export default authReducer;
