import React from 'react';

const LatestArticlesCard = ({article}) => {
  return (
    <div className="h-10 bg-red-200 w-full rounded-xl p-2">
      {article.title} - {article.tags}
    </div>
  );
};

export default LatestArticlesCard;
