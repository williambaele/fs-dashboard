import React, { useEffect } from "react";
import Card from "../components/Card";
import { useAuthContext } from "../hooks/useAuthContext";
import { useItemsContext } from "../hooks/useItemsContext";
import Navbar from "../components/Navbar";

const Items = () => {
  const { items, dispatch } = useItemsContext();
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("/api/items", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_ITEMS", payload: json });
      }
    };
    if (user) {
      fetchItems();
    }
  }, [dispatch, user]);
  return (
    <div>
      <Navbar />
      <div className="min-h-screen gap-4 container mx-auto">


        <div className="grid grid-cols-6">
          <div className="col-span-1 bg-purple-400 min-h-screen"></div>
          <div className="col-span-5 bg-yellow-400">
            <div className="bg-red-400 h-20"></div>
            <div className="grid md:grid-cols-3 p-2">
              {items &&
                items.map((item) => <Card key={item._id} item={item} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
