import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuthContext } from "../hooks/useAuthContext";
import ItemBody from "../components/ItemBody";

const Item = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { user } = useAuthContext();


  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`/api/items/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setItem(json);
      }
    };

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      fetchItem();
    }
  }, [id, user.token]);

  return (
    <div>
      <Navbar />
      <div className="mx-auto container">
        {item ? (
          <div>
            <ItemBody item={item}/>

          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Item;
