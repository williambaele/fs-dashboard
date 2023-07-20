import React, { useEffect } from "react";
import { useArticlesContext } from "../hooks/useArticlesContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Articles = () => {
  const { articles, dispatch } = useArticlesContext();

  // LOOP TO GET ARTICLES//
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/api/artciles");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_ARTICLES", payload: json });
      }
    };

    fetchArticles();
  }, [dispatch]);
  console.log(articles);

  // const lastPostIndex = currentPage * postsPerPage;
  // const firstPostIndex = lastPostIndex - postsPerPage;
  // const currentPosts =
  //   items.length > 0 ? items.slice(firstPostIndex, lastPostIndex) : [];
  // console.log(currentPosts);
  return (
    <div>
      <Navbar />
      <div className="bg-[#F0F0F0] h-screen">

      </div>
      <Footer />
    </div>
  );
};

export default Articles;
