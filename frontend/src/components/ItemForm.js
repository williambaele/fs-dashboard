import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useItemsContext } from "../hooks/useItemsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from "react-toastify";

const ItemForm = () => {
  const navigate = useNavigate();

  const { dispatch } = useItemsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("nike");
  const [colors, setColors] = useState([]);

  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [state, setState] = useState("new");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const choicescolors = ["White", "Red", "Orange", "Blue", "Pink"];
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }
    const item = { title, brand, size, price, state, description };

    const response = await fetch("/api/items", {
      method: "POST",
      body: JSON.stringify(item),
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
      setTitle("");
      setBrand("");
      setSize("");
      setPrice("");
      setState("");
      setDescription("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_ITEM", payload: json });
      navigate(`/item/${json._id}`);
      toast.success("Item created");
    }
  };

  return (
    <div className="px-4 md:px-0">
      <form
        className="py-10 mx-auto container grid gap-4 w-full md:w-1/2"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center text-4xl my-4">Add a new item</h3>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={
            emptyFields.includes("title")
              ? "error p-2 rounded-lg border-red-400 border-2"
              : "p-2 rounded-lg"
          }
          placeholder="Title"
        />
        <select
          onChange={(e) => setBrand(e.target.value)}
          value={brand}
          className="p-2 border-0 rounded-lg"
        >
          <option value="Nike">Nike</option>
          <option value="Adidas">Adidas</option>
          <option value="Jordan">Jordan</option>
          <option value="Yeezy">Yeezy</option>
        </select>
        <div className="grid grid-cols-4 gap-4">

        {choicescolors &&
                  choicescolors.map((choice) => <div><label for={choice}>{choice}</label><input type="checkbox" id={choice} onChange={(e) => setColors(e.target.value)} value={choice} name={choice}/></div>)}
          </div>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="p-2 border-0 rounded-lg"
        >
          <option value="35.5">35.5</option>
          <option value="36">36</option>
          <option value="36.5">36.5</option>
        </select>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="p-2 border-0 rounded-lg"
        >
          <option value="used">Used</option>
          <option value="new">New</option>
        </select>
        <textarea
          className="p-2 border-0 rounded-lg"
          placeholder="Item's description"
          value={description}
          rows="4"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div class="max-w">
          <label htmlFor="">Pictures</label>
          <div class="md:flex">
            <div class="w-full">
              <div class="relative border-dotted h-48 rounded-lg border-2 border-[#F45050] bg-white flex justify-center items-center">
                <div class="absolute">
                  <div class="flex flex-col items-center">
                    <i class="fa fa-folder-open fa-4x text-blue-700"></i>
                    <span class="block text-gray-400 font-normal">
                      Attach you images here
                    </span>
                  </div>
                </div>

                <input type="file" class="h-full w-full opacity-0" name="" />
              </div>
            </div>
          </div>
        </div>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="p-2 rounded-lg"
          placeholder="Price"
        />
        <button className="rounded-lg bg-[#F45050] p-1 hover:bg-[#f56262] text-center text-xl text-white font-medium">
          Publish item
        </button>
        {error && <div className="error text-red-600">{error}</div>}
        {emptyFields}
      </form>
    </div>
  );
};

export default ItemForm;
