import React from "react";

import { Link } from "react-router-dom";

const Card = ({ item, user }) => {
  return (
    <div>
      <Link to={`/item/${item._id}`}>
        <div class="relative flex w-full flex-col p-4 overflow-hidden rounded-md border border-gray-100 bg-white shadow-md">
          <div class="relative flex h-60 w-full rounded-xl">
            <img
              alt={item.title}
              className="object-cover rounded-md"
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div class="pt-4 px-1 pb-3">
            <div className="flex justify-between mb-4">
              <h5 class="text-xl text-slate-900">{item.title.slice(0,15)}</h5>
              <span class="text-xl font-bold text-slate-900">
                {item.price}€
              </span>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <img
                  src="https://www.booska-p.com/wp-content/uploads/2022/10/hasbulla.jpg"
                  alt=""
                  className="rounded-full h-6 w-6 object-cover"
                />
                <span class="text-md font-bold text-slate-900">{user && user.pseudo}</span>
              </div>
              <div className="flex gap-1 items-center">
                <span class="text-md font-bold text-slate-900">4.5/5</span>
                <span class="text-md font-bold text-slate-900">(7)</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
