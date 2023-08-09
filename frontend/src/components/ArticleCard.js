import React from "react";
import { Link } from "react-router-dom";
import ArticleStats from "./ArticleStats";

const ArticleCard = ({ article }) => {
  //FORMAT DATE
  const dateObject = new Date(article.createdAt);
  const day = String(dateObject.getDate()).padStart(2, "0");
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const year = String(dateObject.getFullYear()).slice(-2);
  const classicDateFormat = `${day}/${month}/${year}`;

  //TOPIC LABEL COLOR
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
    <Link to={`/article/${article._id}`}>
      <div className="grid w-full">
        <div className="relative w-full">
          <img
            src="https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F2662116%2Fpexels-photo-2662116.jpeg&w=2048&q=75"
            alt="hero"
            className="w-full h-48 bg-cover rounded-t-2xl"
          />
          <p
            className={`absolute top-4 left-4 bg-${topicColor}-300 text-${topicColor}-500 px-2 text-md rounded-lg`}
          >
            {article.topic}
          </p>
        </div>
        <div className="grid w-full p-4 space-y-4 bg-white rounded-b-2xl">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&w=256&q=75"
                alt=""
                className="h-8 rounded-full"
              />
              <p className="font-bold text-gray-900 text-md">John Doe</p>
            </div>
            <p className="text-sm text-gray-300">{classicDateFormat}</p>
          </div>
          <h2 className="w-full text-xl font-bold break-words">
            {article.title.slice(0, 25)}
          </h2>
          <ArticleStats />
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
