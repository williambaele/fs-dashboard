import { createContext, useReducer } from "react";

export const GroupsContext = createContext();
const initialState = {
  groups: [],
};
export const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GROUPS":
      return {
        ...state,
        groups: action.payload,
      };
    case "CREATE_GROUP":
      return {
        ...state,
        groups: [action.payload, ...state.groups],
      };
    case "DELETE_GROUP":
      return {
        ...state,
        groups: state.groups.filter(
          (group) => group._id !== action.payload._id
        ),
      };
    case "UPDATE_GROUP":
      return {
        ...state,
        groups: state.groups.map((group) =>
          group._id === action.payload._id ? action.payload : group
        ),
      };
    default:
      return state;
  }
};

export const GroupsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(groupsReducer, {
    items: null,
  });

  return (
    <GroupsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GroupsContext.Provider>
  );
};
