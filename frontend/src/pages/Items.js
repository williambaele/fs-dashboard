import React, { useEffect } from "react";
import Card from "../components/Card";
import { useAuthContext } from "../hooks/useAuthContext";
import { useItemsContext } from "../hooks/useItemsContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

      fetchItems();

  }, [dispatch, user]);
  return (
    <div>
      <Navbar />
      <div className="min-h-screen gap-4 container mx-auto">
        <div className="grid md:grid-cols-6">
          <div className="md:col-span-1 col-span-6 bg-purple-400 md:min-h-screen">a</div>
          <div className="md:col-span-5 col-span-6 bg-yellow-400">
            <div className="bg-red-400 h-20"></div>
            <div className="grid md:grid-cols-3 p-2">
              {items &&
                items.map((item) => <Card key={item._id} item={item} />)}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Items;
