import React from "react";

const CommentCard = () => {
  return (
    <div className="grid gap-2 grid-cols-12 pt-10">
      <div className="flex justify-center col-span-1">
        <img
          src="https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.1361285e.jpg&w=256&q=75"
          alt=""
          className="h-10 rounded-full"
        />
      </div>
      <div className="grid space-y-4 col-span-11 rounded-2xl p-4 border border-gray-300">
        <div className="flex justify-between items-center pr-2">
          <div className="flex gap-2 items-center">
            <p className="text-lg font-bold text-gray-900">John Doe</p>
            <p>-</p>
            <p className="text-gray-300 text-sm">09/03/2023</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-three-dots cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolores
          velit modi fugiat eaque ab doloribus ratione culpa odio rem cupiditate
          quod quae perspiciatis ea nobis asperiores deleniti maiores numquam
          illo, similique blanditiis nemo!
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
