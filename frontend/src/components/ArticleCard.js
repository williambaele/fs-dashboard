import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <div className="grid">
      <div className="relative">
        <img
          src="https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F2662116%2Fpexels-photo-2662116.jpeg&w=2048&q=75"
          alt="hero"
          className="rounded-t-2xl h-48"
        />
        <p className="absolute top-4 left-4 bg-purple-200 text-purple-500 px-2 text-md rounded-lg">
          Travel
        </p>
      </div>
      <div className="rounded-b-2xl bg-white p-4">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, qui?
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
