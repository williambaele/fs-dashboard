import React, { useEffect, useState } from "react";
import UserPostCard from "./UserPostCard";

const UserPosts = ({ user, articles }) => {
  console.log(user);
  console.log(articles);
  const [userArticles, setUserArticles] = useState(null);

  //RETRIEVE USER'S ARTCILES ONLY
  useEffect(() => {
    // RETRIEVE USER'S ARTICLES ONLY
    const filteredArticles = articles.filter(
      (article) => article.user === user._id
    );
    setUserArticles(filteredArticles);
  }, [user, articles]);

  return (
    <div className="grid gap-4 overflow-y-auto h-96">
      {userArticles &&
        userArticles.map((article) => (
          <UserPostCard key={article._id} article={article} />
        ))}
    </div>
  );
};

export default UserPosts;
