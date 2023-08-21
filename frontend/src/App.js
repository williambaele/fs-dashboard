import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { useTasksContext } from "./hooks/useTasksContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const { user } = useAuthContext();

  //LOADING TASKS
  const { tasks, dispatch } = useTasksContext();

  //ALL TASKS
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TASKS", payload: json });
      }
    };

    fetchTasks();
  }, [dispatch]);

  // USER'S TASKS
  const [userTasks, setUserTasks] = useState([]);
  useEffect(() => {
    if (user && tasks) {
      // Using an immediately invoked async function
      (async () => {
        // Filter tasks based on user._id
        const userTasks = tasks.filter((task) => task.user === user._id);
        setUserTasks(userTasks);
      })();
    }
  }, [tasks, user]);
  

  console.log(userTasks)

  return (
    <div>

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
