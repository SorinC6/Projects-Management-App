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
  return state;
};

export default projectReducer;
