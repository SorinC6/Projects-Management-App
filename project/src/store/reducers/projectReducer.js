const initState = {
  projects: [
    {
      id: "1",
      title: "Frontend BuildWeek",
      content: "aloha aloha nansn blah blah blah"
    },
    {
      id: "2",
      title: "UserInterface BuildWeek",
      content: "aloha aloha nansn blah blah blah"
    },
    {
      id: "3",
      title: "Backend BuildWeek",
      content: "aloha aloha nansn blah blah blah"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project ", action.payload);
      return state;
    case "CREATE_PROJECT_FAIL":
      console.log("PROJECT ERROR ", action.payload);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
