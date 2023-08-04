import React from "react";

const HeaderUser = ({ user }) => {
  return (
    <div className="flex flex-col h-full">
      <div
        className="w-full h-48 bg-white bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=3840&q=75")',
        }}
      ></div>
      <div className="h-40 mx-auto container shadow-md bg-white z-10 -mt-14 rounded-2xl grid md:grid-cols-5 w-full">
        <div className="flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1526888935184-a82d2a4b7e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-24 w-24 bg-contain rounded-full"
          />
        </div>
        <div className="md:col-span-3 grid content-center h-full space-y-2">
          <h1 className="font-bold text-3xl ">{user.pseudo}</h1>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ea
            laboriosam tenetur, at itaque sit magni? Velit facilis molestiae
            qui.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-gray-200 p-4 rounded-full w-fit cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-share"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;
