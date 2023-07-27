import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
// import { useAuthContext } from "../hooks/useAuthContext";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import ArticleHeader from "../components/ArticleHeader";
import ArticleCover from "../components/ArticleCover";
import ArticleBody from "../components/ArticleBody";
import CommentSection from "../components/CommentSection";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  // const { user } = useAuthContext();
  const [userArticle, setUserArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`/api/articles/${id}`);
      const json = await response.json();

      if (response.ok) {
        setArticle(json);
        console.log(json);
        console.log(json.user_id);
        const userItem = json.user_id;
        const userResponse = await fetch(`/api/user/${userItem}`);
        console.log(userResponse);
        const userJson = await userResponse.json();

        if (userResponse.ok) {
          const userPseudo = userJson.pseudo;
          console.log(userPseudo);
          setUserArticle(userPseudo);
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
    <div>
      <Navbar />
      <div className="py-10 bg-[#F8F8F8]">
        <ArticleHeader article={article} userArticle={userArticle} />
        <ArticleCover/>
        <ArticleBody article={article} userArticle={userArticle}/>
        <CommentSection/>
      </div>
      <Footer />
    </div>
  );
};

export default Article;
