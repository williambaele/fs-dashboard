import React from "react";
import WorkoutForm from "../components/ItemForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NewItem = () => {
  return (
    <div className="h-screen bg-slate-100">
      <Navbar />
      <div className="mx-auto container">
        <WorkoutForm />

      </div>
      <Footer />
    </div>
  );
};

export default NewItem;
