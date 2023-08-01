import React from 'react';

const LatestArticlesCard = ({article}) => {
  return (
    <div className="h-10 bg-red-200 w-full">
      {article.title}
    </div>
  );
};

export default LatestArticlesCard;
