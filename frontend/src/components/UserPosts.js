import React, { useEffect, useState } from "react";
import LatestArticlesCard from "./LatestArticlesCard";

const UserPosts = ({ id, articles }) => {
  const [userArticles, setUserArticles] = useState(null);

  //RETRIEVE USER'S ARTCILES ONLY
  useEffect(() => {
    const filteredArticles = articles.filter((article) => article.user === id);
    setUserArticles(filteredArticles);
  }, [id, articles]);


  return (
    <div className="grid gap-6 grid-cols-2 py-10">
      {userArticles &&
        userArticles.map((article, index) => (
          <LatestArticlesCard article={article} key={index} />
        ))}
    </div>
  );
};

export default UserPosts;
