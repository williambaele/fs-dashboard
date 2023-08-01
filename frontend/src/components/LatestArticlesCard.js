import React from "react";

const LatestArticlesCard = ({ article }) => {
  return (
    <div className="h-48 bg-white shadow-sm border border-gray-200 w-full rounded-xl p-4 grid grid-cols-3 gap-4">
      <div className="col-span-2 flex flex-col gap-2 p-2">
        <h2 className="text-xl">{article.title}</h2>
        <p className="text-gray-400 text-md">{article.tags}</p>
      </div>
      <div
        className="bg-green-500 h-full bg-cover rounded-2xl"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80")',
        }}
      ></div>
    </div>
  );
};

export default LatestArticlesCard;
