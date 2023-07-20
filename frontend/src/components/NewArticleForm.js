import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from "react-toastify";
import { useArticlesContext } from "../hooks/useArticlesContext";
import { useNavigate } from "react-router-dom";


const NewArticleForm = () => {
  const navigate = useNavigate();

  const [text, setText] = useState("");
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
    const article = { text };

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
    <div className="grid gap-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="text"
          className="bg-red-200 p-4"
        />
        <button type="submit" className="bg-green-200">
          ENVOYER
        </button>
        {error && <div className="error text-red-600">{error}</div>}
        {emptyFields}
      </form>
    </div>
  );
};

export default NewArticleForm;
