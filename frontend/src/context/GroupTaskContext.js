import { createContext, useReducer } from "react";

export const GroupTasksContext = createContext();
const initialState = {
  groupTasks: [],
};
export const groupTasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GROUPTASKS":
      return {
        ...state,
        groupTasks: action.payload,
      };
    case "CREATE_GROUPTASK":
      return {
        ...state,
        groupTasks: [action.payload, ...state.groupTasks],
      };
    case "DELETE_GROUPTASK":
      return {
        ...state,
        groupTasks: state.groupTasks.filter((groupTask) => groupTask._id !== action.payload._id),
      };
    case "UPDATE_GROUPTASK":
      return {
        ...state,
        grouoTasks: state.groupTasks.map((groupTask) =>
        groupTask._id === action.payload._id ? action.payload : groupTask
        ),
      };
    default:
      return state;
  }
};

export const GroupTasksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(groupTasksReducer, {
    items: null,
  });

  return (
    <GroupTasksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GroupTasksContext.Provider>
  );
};
