import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NewArticle from "./pages/NewArticle";
import Articles from "./pages/Articles";
import Dashboard from "./pages/Dashboard";
import Article from "./pages/Article";

function App() {
  const { user } = useAuthContext();
  console.log(user)

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/new-article"
              element={user ? <NewArticle /> : <Navigate to="/login" />}
            />
            <Route path="/articles" element={<Articles />} />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/Dashboard"
              element={user ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route path="/article/:id" element={<Article />} />
          </Routes>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
