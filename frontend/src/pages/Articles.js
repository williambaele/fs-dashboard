import React, { useEffect } from "react";
import { useItemsContext } from "../hooks/useItemsContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Articles = () => {
  const { items, dispatch } = useItemsContext();

  // LOOP TO GET ITEMS//
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("/api/items");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_ITEMS", payload: json });
      }
    };

    fetchItems();
  }, [dispatch]);
  console.log(items);

  // const lastPostIndex = currentPage * postsPerPage;
  // const firstPostIndex = lastPostIndex - postsPerPage;
  // const currentPosts =
  //   items.length > 0 ? items.slice(firstPostIndex, lastPostIndex) : [];
  // console.log(currentPosts);
  return (
    <div>
      <Navbar />
      <div className="bg-[#F0F0F0] h-screen">

      </div>
      <Footer />
    </div>
  );
};

export default Articles;
