import React from "react";

const TrendingAuthors = () => {
  const authors = [
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
    {
      name: "Finance",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
  ];
  return (
    <div className="py-20 px-10">
      <div className="bg-[#f3f4f6] rounded-xl p-10">
        <div className="mx-auto container px-4 md:px-0">
          <div className="grid space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold">Top trending authors</h2>
              <p className="text-gray-500 text-xl font-large">
                Discover the most active authors and their interesting articles
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {authors.map((author, index) => (
                <div key={index} className="space-y-4">
                  <div className="rounded-xl h-60 bg-red-200 grid">
                    <div className="h-full bg-gray-200 relative rounded-t-xl">
                      <div className="bg-gray-400 absolute top-2 left-2 rounded-xl h-6 w-1/4 flex items-center justify-center gap-2">
                        <p className="text-lg font-large">5</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          />
                        </svg>
                      </div>
                      <div className="absolute h-14 w-14 rounded-full right-0 left-0 -bottom-7  mx-auto">
                        <img
                          src={author.image}
                          alt=""
                          className="h-14 w-14 bg-contain rounded-full"
                        />
                      </div>
                    </div>
                    <div className="h-full bg-green-900 rounded-b-xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingAuthors;
