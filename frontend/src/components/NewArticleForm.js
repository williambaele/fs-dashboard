import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from "react-toastify";
import { useArticlesContext } from "../hooks/useArticlesContext";
import { useNavigate } from "react-router-dom";

const NewArticleForm = () => {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [tags, setTags] = useState("");

  const { user } = useAuthContext();
  const { dispatch } = useArticlesContext();

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }
    const article = { text, title, topic, tags };

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
        <input
          type="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags"
          className="bg-white shadow-xs p-4 rounded-xl border border-gray-200 outline-none"
        />
        {error && <div className="error text-red-600">{error}</div>}
        {emptyFields}
        <button type="submit" className="bg-blue-500 hover:bg-blue-400 rounded-xl py-2 text-white font-bold">
          Publier
        </button>
      </form>
    </div>
  );
};

export default NewArticleForm;
