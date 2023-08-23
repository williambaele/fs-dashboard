import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TasksContextProvider } from "./context/TaskContext";
import { AuthContextProvider } from "./context/AuthContext";
import { GroupsContextProvider } from "./context/GroupContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GroupsContextProvider>
        <TasksContextProvider>
          <App />
        </TasksContextProvider>
      </GroupsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
