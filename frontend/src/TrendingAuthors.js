import React, { useEffect, useState } from "react";

const TrendingAuthors = () => {
  const authors = [
    {
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1526888935184-a82d2a4b7e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      background:
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      name: "Marius Cornel",
      image:
        "https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
      background:
        "https://plus.unsplash.com/premium_photo-1678303396234-4180231353df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      name: "Natacha Sinclair",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80",
      background:
        "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      name: "William Jislo",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      background:
        "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
  ];

  console.log("hi");
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Error fetching user data");
        }
        const json = await response.json();
        setUsers(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="px-10 py-20">
      <div className="bg-[#f3f4f6] rounded-xl p-10">
        <div className="container px-4 mx-auto md:px-0">
          <div className="grid space-y-6">
            <div className="space-y-2 text-center pb-10c">
              <h2 className="text-4xl font-bold">Top trending authors</h2>
              <p className="text-xl text-gray-500 font-large">
                Discover the most active authors and their interesting articles
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {authors.map((author, index) => (
                <div key={index} className="space-y-4">
                  <div className="grid bg-red-200 rounded-xl h-60">
                    <div
                      className="relative h-full bg-gray-200 rounded-t-xl"
                      style={{
                        backgroundImage: `url(${author.background})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute flex items-center justify-center w-1/4 h-6 gap-2 bg-gray-200 shadow-sm top-2 left-2 rounded-xl">
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
                      <div className="absolute left-0 right-0 mx-auto rounded-full h-14 w-14 -bottom-7">
                        <img
                          src={author.image}
                          alt=""
                          className="bg-contain rounded-full h-14 w-14"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full bg-white rounded-b-xl">
                      <h2 className="text-xl font-large">{author.name}</h2>
                      <h3 className="text-gray-400 text-md">@{author.name}</h3>
                    </div>
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
