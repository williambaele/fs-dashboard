import React from "react";
import FiltersLatestArticles from "./FiltersLatestArticles";

const LatestArticles = () => {
  return (
    <div className="mx-auto container px-4 md:px-0">
      <div className="flex flex-col space-y-4">
        <h2 className="text-4xl font-bold">Latest Articles 🎈</h2>
        <p className="text-gray-500 text-xl font-large">
          Discover the most outstanding articles in all topics of life.
        </p>
        <FiltersLatestArticles/>
      </div>
    </div>
  );
};

export default LatestArticles;
