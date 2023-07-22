import React from "react";

const ArticleBody = ({article}) => {

  const tags  = ["Finance", "Travel", "Tech", "Sport"]

  return (
    <div className="grid gap-4 px-4 md:px-0 w-full md:w-1/2 mx-auto container py-14">
      <p className="text-gray-600 text-lg">
       {article.text}
      </p>

      <div className="flex gap-4 pt-6">
        {tags.map((tag, index) =>
        <p key={index} className="bg-white shadow-sm p-2 font-bold rounded-xl text-gray-400 text-md">
          {tag}
        </p>
        )}
      </div>
    </div>
  );
};

export default ArticleBody;
