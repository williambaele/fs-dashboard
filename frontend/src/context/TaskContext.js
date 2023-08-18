import { createContext, useReducer } from "react";

export const TasksContext = createContext();
const initialState = {
  tasks: [],
};
export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };
    case "CREATE_TASK":
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const TasksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, {
    items: null,
  });

  return (
    <TasksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
