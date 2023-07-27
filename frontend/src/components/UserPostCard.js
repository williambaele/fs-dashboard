import React from "react";
import UserPostCardActions from "./UserPostCardActions";
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
          <UserPostCardStats/>
          <UserPostCardActions/>
        </div>
      </div>
    </div>
  );
};

export default UserPostCard;
