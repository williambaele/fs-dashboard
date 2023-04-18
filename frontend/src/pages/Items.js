import React, { useEffect } from "react";
import Card from "../components/Card";
import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import Navbar from "../components/Navbar";

const Items = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);
  return (
    <div>
      <Navbar />
      <div className="workouts grid md:grid-cols-3 gap-4 container mx-auto">
        {workouts &&
          workouts.map((workout) => (
            <Card key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Items;
