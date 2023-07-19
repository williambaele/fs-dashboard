import React from "react";

const TrendingTopics = () => {
  const topics = [
    {
      name: "Sport",
      image:
        "https://images.unsplash.com/photo-1526888935184-a82d2a4b7e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      name: "Cooking",
      image:
        "https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
    },
    {
      name: "Self development",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80",
    },
    {
      name: "Finance",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
  ];
  return (
    <div className="bg-gray-100 py-10">
      <div className="mx-auto container px-4 md:px-0">
        <div className="grid space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Top trending topics</h2>
            <p className="text-gray-500 text-lg font-large">
              Discover 233 topics
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topics.map((topic, index) => (
              <div key={index} className="space-y-4">
                <div
                  className="rounded-md relative"
                  style={{
                    backgroundImage: `url(${topic.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "200px", // Adjust the height as needed
                  }}
                >
                  <p className="absolute top-2 left-2 bg-white py-1 px-2 rounded-lg">
                    #{index + 1}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-grey-800 font-large">
                    {topic.name}
                  </h3>
                  <p className="text-md text-gray-500">12 articles</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopics;