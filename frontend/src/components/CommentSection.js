import React, { useState } from "react";
import CommentCard from "./CommentCard";
import { useCommentsContext } from "../hooks/useCommentsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const CommentSection = ({article}) => {
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const { dispatch } = useCommentsContext();
  const { user } = useAuthContext();


  //ARTCILE CREATION
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Checking if the user is logged in
    if (!user) {
      setError("You must be logged in");
      return;
    }
    //Adding data to the article's creation
    const comment = { content, article_id: article._id, user_id: user._id };
    const response = await fetch("/api/articles", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setContent("");

      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_COMMENT", payload: json });
    }
  };

  return (
    <div className="container grid w-full px-4 pt-10 mx-auto border-t border-gray-400 md:px-0 md:w-1/2">
      <h3 className="text-3xl font-bold text-gray-900">Comments (10)</h3>
      <div className="grid w-full gap-4">
        <form className="pt-6 space-y-4" onSubmit={handleSubmit}>
          <textarea
            className="w-full p-2 pl-4 bg-white shadow-sm rounded-2xl"
            placeholder="Add to discussion"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="bg-[#4338ca] px-6 py-3 text-white rounded-2xl" type="submit">
            Submit
          </button>
          {error} {emptyFields}
        </form>
        <CommentCard />
      </div>
    </div>
  );
};

export default CommentSection;
