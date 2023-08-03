import React from "react";
import { Link } from "react-router-dom";

const ArticleHeader = ({ article, author }) => {
  //FORMAT DATE
  const dateObject = new Date(article.createdAt);
  const day = String(dateObject.getDate()).padStart(2, "0");
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const year = String(dateObject.getFullYear()).slice(-2);
  const classicDateFormat = `${day}/${month}/${year}`;

  return (
    <div className="grid gap-4 px-4 md:px-0 w-full md:w-1/2 mx-auto container pb-14">
      <p className="w-fit top-4 left-4 bg-purple-200 text-purple-500 px-2 text-xl rounded-lg">
        {article.topic}
      </p>
      <h1 className="text-gray-900 font-bold text-4xl border-b border-gray-300 pb-4">
        {article.title}
      </h1>
      <div className="grid-cols-2 grid">
      <Link to={`/user/${article.user}`}>

        <div className="flex items-center gap-4">
          <img
            src="https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&w=256&q=75"
            alt=""
            className="rounded-full h-12"
          />
          <div className="grid gap-1">
            <p className="text-gray-900 text-lg font-bold">{author}</p>
            <p className="text-gray-300 text-sm">{classicDateFormat}</p>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default ArticleHeader;
