import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <div>
      <p>{article.text}</p>
    </div>
  );
};

export default ArticleCard;
