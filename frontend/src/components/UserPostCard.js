import React from "react";
import UserPostCardStats from "./UserPostCardStats";

const UserPostCard = () => {
  return (
    <div className="md:grid-cols-3 grid shadow-sm h-1/2 rounded-xl">
      <div className="h-full object-cover w-full">
        <img
          src="https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F2662116%2Fpexels-photo-2662116.jpeg&w=2048&q=75"
          alt="hero"
          className="h-full w-full rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
        />
      </div>
      <div className="md:col-span-2 p-4 bg-gray-100 rounded-b-xl md:rounded-bl-none md:rounded-r-xl space-y-5 relative">
        <h2 className="text-3xl font-bold text-gray-900">Lorem ipsum</h2>
        <p className="text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facere cum
          aliquid repellendus delectus, libero sapiente minima sint impedit
          vitae.
        </p>
        <div className="flex gap-4 w-full">
          <div className="flex items-center bg-white gap-2 p-1 px-3 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            <p className="text-sm">1</p>
          </div>
          <div className="flex items-center bg-white gap-2 p-1 px-3 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              class="bi bi-chat-left-dots"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
            <p className="text-sm">5</p>
          </div>
          <UserPostCardStats/>
        </div>
      </div>
    </div>
  );
};

export default UserPostCard;
