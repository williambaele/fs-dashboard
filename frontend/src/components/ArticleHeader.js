import React from "react";
import { Link } from "react-router-dom";

const ArticleHeader = ({ article, author }) => {
  //FORMAT DATE
  const dateObject = new Date(article.createdAt);
  const day = String(dateObject.getDate()).padStart(2, "0");
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const year = String(dateObject.getFullYear()).slice(-2);
  const classicDateFormat = `${day}/${month}/${year}`;

  let topicColor = null;

  switch (article.topic) {
    case "Sport":
      topicColor = "blue";
      break;
    case "Fashion":
      topicColor = "purple";
      break;
    case "Garden":
      topicColor = "green";
      break;
    case "Travel":
      topicColor = "orange";
      break;
    case "Food":
      topicColor = "red";
      break;
    default:
      topicColor = "red";
      break;
  }

  return (
    <div className="container grid w-full gap-4 px-4 mx-auto md:px-0 md:w-1/2 pb-14">
      <p
        className={`px-2 text-xl bg-${topicColor}-300 text-${topicColor}-500 rounded-lg w-fit top-4 left-4`}
      >
        {article.topic}
      </p>
      <h1 className="pb-4 text-4xl font-bold text-gray-900 border-b border-gray-300">
        {article.title}
      </h1>
      <div className="grid grid-cols-2">
        <Link to={`/user/${article.user}`}>
          <div className="flex items-center gap-4">
            <img
              src="https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&w=256&q=75"
              alt=""
              className="h-12 rounded-full"
            />
            <div className="grid gap-1">
              <p className="text-lg font-bold text-gray-900">{author}</p>
              <p className="text-sm text-gray-300">{classicDateFormat}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ArticleHeader;
