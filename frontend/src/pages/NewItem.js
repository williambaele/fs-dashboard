import React from "react";
import WorkoutForm from "../components/WorkoutForm";
import Navbar from "../components/Navbar";

const NewItem = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto.container">
        <WorkoutForm />
        
      </div>
    </div>
  );
};

export default NewItem;
