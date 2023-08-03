import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderUser from "../components/HeaderUser";
import UserPosts from "../components/UserPosts";

const User = ({ articles }) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //FETCH USER'S DATA
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/user/${id}`);
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        setUser(json);
      }
      setIsLoading(false);
    };

    fetchUser();
  }, [id]);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16 bg-[#e5e7eb]">
        <HeaderUser user={user} />
        <div className="mx-auto container">
          <UserPosts id={id} articles={articles} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default User;
