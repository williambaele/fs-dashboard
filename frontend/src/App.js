import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { useTasksContext } from "./hooks/useTasksContext";
import { useGroupsContext } from "./hooks/useGroupsContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const { user } = useAuthContext();
  const { tasks, dispatch: tasksDispatch } = useTasksContext();
  const { groups, dispatch: groupsDispatch } = useGroupsContext();

  //ALL TASKS
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks");
      const json = await response.json();

      if (response.ok) {
        tasksDispatch({ type: "SET_TASKS", payload: json });
      }
    };

    fetchTasks();
  }, [tasksDispatch]);

  // USER'S TASKS
  const [userTasks, setUserTasks] = useState([]);
  useEffect(() => {
    if (user && tasks) {
      (async () => {
        // Filter tasks based on user._id
        const userTasks = tasks.filter((task) => task.user === user._id);
        setUserTasks(userTasks);
      })();
    }
  }, [tasks, user]);

  // ALL GROUPS
  useEffect(() => {
    const fetchGroups = async () => {
      if (user) {
        const response = await fetch("/api/groups", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();

        if (!response.ok) {
          console.log("error");
        }
        if (response.ok) {
          groupsDispatch({ type: "SET_GROUPS", payload: json });
          console.log(json);
        }
      }
    };
    fetchGroups();
  }, [groupsDispatch, user]);

  // USER'S GROUPS
  const [userGroups, setUserGroups] = useState([]);
  useEffect(() => {
    if (user && groups) {
      // Using an immediately invoked async function
      (async () => {
        // Filter tasks based on user._id
        const userGroups = groups.filter((group) => group.user === user._id);
        setUserGroups(userGroups);
      })();
    }
  }, [groups, user]);
  console.log("user group:" + userGroups);

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={
                !user ? (
                  <Login />
                ) : (
                  <Home user={user} tasks={tasks} userTasks={userTasks} />
                )
              }
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
