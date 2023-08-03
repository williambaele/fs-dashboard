import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import ArticleHeader from "../components/ArticleHeader";
import ArticleCover from "../components/ArticleCover";
import ArticleBody from "../components/ArticleBody";
import CommentSection from "../components/CommentSection";
import Loader from "../components/Loader";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`/api/articles/${id}`);
      const json = await response.json();
      if (response.ok) {
        setArticle(json);
        const author = json.user;
        const userData = await fetch(`/api/user/${author}`);
        const userJson = await userData.json();
        if (userData.ok) {
          const authorPseudo = userJson.pseudo;
          setAuthor(authorPseudo);
        }
      }
      setIsLoading(false);
    };

    fetchArticle();
  }, [id]);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow pt-16 bg-[#e5e7eb]">
        <Navbar />
        <div className="py-10 bg-[#F8F8F8]">
          <ArticleHeader article={article} author={author} />
          <ArticleCover />
          <ArticleBody article={article} />
          <CommentSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article;
