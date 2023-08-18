import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { useTasksContext } from "./hooks/useTasksContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  const { user } = useAuthContext();

  //LOADING TASKS
  const { tasks, dispatch } = useTasksContext();

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/api/tasks");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TASKS", payload: json });
        console.log(tasks)
      }
    };

    fetchArticles();
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={!user ? <Login /> : <Home user={user} tasks={tasks} />}
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
