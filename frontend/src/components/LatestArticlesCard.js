import React from "react";
import { Link } from "react-router-dom";

const LatestArticlesCard = ({ article }) => {
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
    default:
      topicColor = "red";
      break;
  }

  return (
    <Link to={`/article/${article._id}`}>
      <div className="h-48 bg-white shadow-sm border border-gray-200 w-full rounded-xl p-4 grid grid-cols-3 gap-4">
        <div className="col-span-2 flex flex-col gap-2 p-2">
          <p
            className={`w-fit  px-2 text-sm rounded-lg bg-${topicColor}-300 text-${topicColor}-500 `}
          >
            {article.topic}
          </p>
          <h2 className="text-xl">{article.title}</h2>
          <p className="text-gray-400 text-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
            quo.
          </p>
          <div className="flex gap-4 w-full">
            <div className="flex items-center bg-gray-100 gap-2 p-1 px-3 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
              <p className="text-sm">1</p>
            </div>
            <div className="flex items-center bg-gray-100 gap-2 p-1 px-3 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="currentColor"
                class="bi bi-chat-left-dots"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <p className="text-sm">5</p>
            </div>
          </div>
        </div>
        <div
          className="h-full bg-cover rounded-2xl"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80")',
          }}
        ></div>
      </div>
    </Link>
  );
};

export default LatestArticlesCard;
