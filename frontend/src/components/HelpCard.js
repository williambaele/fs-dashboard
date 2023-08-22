import React from "react";

const HelpCard = () => {
  return (
    <div className="grid h-full gap-2">
      <div className="bg-[#232323] rounded p-4 h-60">
        <h2 className="text-2xl text-gray-300">Create a new group</h2>
      </div>
      <div className="h-40 bg-[#593EFE] rounded p-4 flex flex-col gap-4 items-center justify-center hover:bg-[#593EFE]/80 cursor-pointer">
        <h2 className="text-2xl text-white">Need help ?</h2>
        <p className="text-white text-md">Contact me for support</p>
      </div>
    </div>
  );
};

export default HelpCard;
