import React from "react";

const HeaderUser = ({ user }) => {
  return (
    <div className="flex flex-col h-full">
      <div
        className="w-full h-48 bg-red-400 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=3840&q=75")',
        }}
      ></div>
      <div className="h-40 mx-auto container bg-white z-10 -mt-14 rounded-2xl grid md:grid-cols-5 w-full">
        <div className="flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1526888935184-a82d2a4b7e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-24 w-24 bg-contain rounded-full"
          />
        </div>
        <div className="col-span-3 bg-purple-400"></div>
        <div className="bg-red-400"></div>
      </div>
    </div>
  );
};

export default HeaderUser;
