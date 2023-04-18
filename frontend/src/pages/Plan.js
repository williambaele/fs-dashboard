import React from "react";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";

const Plan = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto container bg-red-100 flex justify-center">
        <SearchForm/>
      </div>
    </div>
  );
};

export default Plan;
