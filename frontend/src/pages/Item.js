import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
// import { useAuthContext } from "../hooks/useAuthContext";
import Footer from "../components/Footer";

const Item = () => {
  // const { id } = useParams();
//


  // useEffect(() => {
  //   const fetchItem = async () => {
  //     const response = await fetch(`/api/items/${id}`);
  //     const json = await response.json();

  //     if (response.ok) {
  //       setItem(json);
  //       console.log(json);
  //       console.log(json.user_id);
  //       const userItem = json.user_id
  //       console.log("Going to get user's pseudo");
  //       const userResponse = await fetch(`/api/user/${userItem}`);
  //       console.log(userResponse);
  //       const userJson = await userResponse.json();

  //       if (userResponse.ok) {
  //         const userPseudo = userJson.pseudo;
  //         console.log(userPseudo);
  //         setUserItem(userPseudo);
  //       }
  //     }
  //   };

  //   fetchItem();
  // }, [id]);

  return (
    <div>
      <Navbar />
      <div class="bg-slate-100">
        <div className="mx-auto container">

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Item;
