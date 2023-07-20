import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const NewArticleForm = () => {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const article = { text };
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }
    const article = { text };

    const response = await fetch("/api/items", {
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
      dispatch({ type: "CREATE_ITEM", payload: json });

      navigate(`/item/${json._id}`, {
        state: { from: "create" },
        onAfterNavigate: () => {
          toast.success("Item created");
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
      </form>
    </div>
  );
};

export default NewArticleForm;
