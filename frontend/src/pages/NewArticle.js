import React from "react";
// import ItemForm from "../components/ItemForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewArticleForm from "../components/NewArticleForm";

const NewArticle = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <div className="mx-auto container">
        <NewArticleForm/>
      </div>
      <Footer />
    </div>
  );
};

export default NewArticle;
