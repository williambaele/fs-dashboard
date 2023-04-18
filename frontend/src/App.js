import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Plan from "./pages/Plan";
import NewItem from "./pages/NewItem";
import Items from "./pages/Items";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/new-item"
              element={user ? <NewItem /> : <Navigate to="/login" />}
            />
            <Route path="/items" element={<Items/>}/>
            <Route
              path="/plan"
              element={user ? <Plan /> : <Navigate to="/login" />}
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
