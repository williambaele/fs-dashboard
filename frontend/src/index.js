import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TasksContextProvider } from "./context/TaskContext";
import { AuthContextProvider } from "./context/AuthContext";
import { GroupsContextProvider } from "./context/GroupContext";
import { GroupTasksContextProvider } from "./context/GroupTaskContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GroupTasksContextProvider>
        <GroupsContextProvider>
          <TasksContextProvider>
            <App />
          </TasksContextProvider>
        </GroupsContextProvider>
      </GroupTasksContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
