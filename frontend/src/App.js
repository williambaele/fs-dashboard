import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useArticlesContext } from "./hooks/useArticlesContext";

// pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Dashboard from "./pages/Dashboard";
import Article from "./pages/Article";
import { useEffect, useState } from "react";
import User from "./pages/User";
import Loader from "./components/Loader";


function App() {
  const { user } = useAuthContext();
  //LOADING ARTICLES
  const { articles, dispatch } = useArticlesContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/api/articles");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_ARTICLES", payload: json });
      }

      setIsLoading(false);
    };

    fetchArticles();
  }, [dispatch]);

  if (isLoading) {
    return <Loader/>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home articles={articles} />} />
            <Route
              path="/articles"
              element={<Articles articles={articles} />}
            />
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
              element={
                user ? (
                  <Dashboard articles={articles} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/user/:id" element={<User articles={articles}/>} />
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
