import React, { useState } from "react";
import { toast } from "react-toastify";
import { useArticlesContext } from "../hooks/useArticlesContext";
import { useNavigate } from "react-router-dom";

const NewArticleForm = ({ user }) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [tags, setTags] = useState("Garden");
  const { dispatch } = useArticlesContext();
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  console.log(user);
  console.log(user._id);
  //ARTCILE CREATION
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Checking if the user is logged in
    if (!user) {
      setError("You must be logged in");
      return;
    }
    //Adding data to the article's creation
    const article = { text, title, topic, tags, user_id: user._id }; // Send the user_id from the user object
    const response = await fetch("/api/articles", {
      method: "POST",
      body: JSON.stringify(article),
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
      setText("");

      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_ARTICLE", payload: json });

      navigate(`/article/${json._id}`, {
        state: { from: "create" },
        onAfterNavigate: () => {
          toast.success("Article created");
        },
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="bg-white shadow-xs p-4 rounded-xl border border-gray-200 outline-none"
        />
        <textarea
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Content"
          className="bg-white shadow-xs p-4 rounded-xl border border-gray-200 outline-none"
        />
        <input
          type="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Topic"
          className="bg-white shadow-xs p-4 rounded-xl border border-gray-200 outline-none"
        />
        <select
          type="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags"
          className="bg-white shadow-xs p-4 rounded-xl border border-gray-200 outline-none"
        >
          <option value="Garden">Garden</option>
          <option value="Sport">Sport</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
          <option value="Fashion">Fashion</option>
        </select>
        {error && (
          <div className="error text-red-600 flex gap-1">
            {error}:
            <div className="flex gap-1">
              {emptyFields.map((item) => (
                <p>{item}</p>
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-400 rounded-xl py-2 text-white font-bold"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default NewArticleForm;
