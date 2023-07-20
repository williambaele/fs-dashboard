import React, { useEffect } from "react";
import { useArticlesContext } from "../hooks/useArticlesContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";

const Articles = () => {
  const { articles, dispatch } = useArticlesContext();

  // LOOP TO GET ARTICLES//
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/api/articles");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_ARTICLES", payload: json });
      }
    };

    fetchArticles();
  }, [dispatch]);
  console.log(articles);

  return (
    <div>
      <Navbar />
      <div className="bg-[#F0F0F0] h-screen">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
