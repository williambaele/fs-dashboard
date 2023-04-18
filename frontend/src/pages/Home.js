import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import Card from "../components/Card";

import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";

const Home = () => {


  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <div className="grid grid-cols-3 gap-2 container mx-auto mb-10">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
