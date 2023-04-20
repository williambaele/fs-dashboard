import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NewItem from "./pages/NewItem";
import Items from "./pages/Items";
import Item from "./pages/Item";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/new-item"
              element={user ? <NewItem /> : <Navigate to="/login" />}
            />
            <Route
              path="/items"
              element={user ? <Items /> : <Navigate to="/login" />}
            />

            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route path="/item/:id" element={<Item/>} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
