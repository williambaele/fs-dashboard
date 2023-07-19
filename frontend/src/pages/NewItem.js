import React from "react";
// import ItemForm from "../components/ItemForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NewItem = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <div className="mx-auto container">
        {/* <ItemForm /> */}
      </div>
      <Footer />
    </div>
  );
};

export default NewItem;
