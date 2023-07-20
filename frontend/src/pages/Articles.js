import React, { useEffect, useState } from "react";
import { useArticlesContext } from "../hooks/useArticlesContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";

const Articles = () => {
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
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="bg-[#F0F0F0] h-screen">
        <div className="container mx-auto py-10 grid md:grid-cols-4 gap-4 w-full px-4 md:px-0" >
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
