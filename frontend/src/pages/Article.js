import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
// import { useAuthContext } from "../hooks/useAuthContext";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import ArticleBody from "../components/ArticleBody";

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
        console.log("Going to get user's pseudo");
        const userResponse = await fetch(`/api/user/${userItem}`);
        console.log(userResponse);
        const userJson = await userResponse.json();

        if (userResponse.ok) {
          const userPseudo = userJson.pseudo;
          console.log(userPseudo);
          setUserArticle(userPseudo);
        }
      }
      setIsLoading(false); // Set loading state to false once data is fetched.
    };

    fetchArticle();
  }, [id]);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Navbar />
      <div class="bg-slate-100">
        <div className="mx-auto container">
          <ArticleBody article={article} userArticle={userArticle} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article;
