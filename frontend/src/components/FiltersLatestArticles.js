import React, { useState } from "react";

const FiltersLatestArticles = () => {
  const topics = [
    {
      name: "Sport",
    },
    {
      name: "Food",
    },
    {
      name: "Travel",
    },
    {
      name: "Fashion",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("Sport");

  const handleFilterClick = (key) => {
    setActiveFilter(key);
  };
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        {topics.map((topic) => (
          <p
            key={topic.name}
            className={`px-6 py-1 rounded-2xl text-lg cursor-pointer text-gray-500 hover:text-gray-600 hover:bg-gray-300 ${
              activeFilter === topic.name ? "bg-gray-900 text-white" : ""
            }`}
            onClick={() => handleFilterClick(topic.name)}
          >
            {topic.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FiltersLatestArticles;
