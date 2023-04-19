import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const Item = () => {
  const { id } = useParams();

  return (
    <div>
      <Navbar />
      <div className="mx-auto container bg-red-200">
        <p>Item ID: {id}</p>
      </div>
    </div>
  );
};

export default Item;
