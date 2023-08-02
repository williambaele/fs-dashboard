import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import ArticleHeader from "../components/ArticleHeader";
import ArticleCover from "../components/ArticleCover";
import ArticleBody from "../components/ArticleBody";
import CommentSection from "../components/CommentSection";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`/api/articles/${id}`);
      const json = await response.json();
      console.log(json)

      if (response.ok) {
        setArticle(json);
        const author = json.user;
        console.log('author id')
        console.log(author)
        const userData = await fetch(`/api/user/${author}`);
        const userJson = await userData.json();
        console.log(userJson)

        if (userData.ok) {
          const authorPseudo = userJson.pseudo;
          setAuthor(authorPseudo);
          console.log(authorPseudo)
        }
      }
      setIsLoading(false);
    };

    fetchArticle();
  }, [id]);
  if (isLoading) {
    return <p>Loading...</p>;
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
