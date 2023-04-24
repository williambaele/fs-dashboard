import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useItemsContext } from "../hooks/useItemsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from "react-toastify";

const ItemForm = () => {
  const navigate = useNavigate();

  const { dispatch } = useItemsContext();
  const { user } = useAuthContext();
  const [clickedIndices, setClickedIndices] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("nike");
  const [colors, setColors] = useState([]);
  const sizes = [
    "36",
    "36.5",
    "37",
    "37.5",
    "38",
    "39",
    "40",
    "40.5",
    "41",
    "42",
    "43",
    "44",
    "44.5",
    "45",
  ];
  const [size, setSize] = useState("35.5");
  const [price, setPrice] = useState("");
  const [state, setState] = useState("new");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const colourOptions = [
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "white", label: "White" },
    { value: "orange", label: "Orange" },
    { value: "braun", label: "Braun" },
    { value: "grey", label: "Grey" },
    { value: "black", label: "Black" },
    { value: "pink", label: "Pink" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }
    const item = { title, brand, size, price, state, description, colors };

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
      setColors([{}]);
      setPrice("");
      setState("");
      setDescription("");
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
        <label>Select the colour(s)</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colourOptions &&
            colourOptions.map((choice, index) => (
              <div htmlFor={choice.value} key={choice.value}>
                <label
                  className={`bg-white p-2 rounded-lg flex justify-center h-full w-full ${
                    clickedIndices.includes(index)
                      ? "border-2 border-slate-300"
                      : ""
                  }`}
                  onClick={() => {
                    if (clickedIndices.includes(index)) {
                      setClickedIndices(
                        clickedIndices.filter((i) => i !== index)
                      );
                    } else {
                      setClickedIndices([...clickedIndices, index]);
                    }
                  }}
                  htmlFor={choice.value}
                >
                  {choice.label}
                </label>
                <input
                  type="checkbox"
                  className="hidden"
                  id={choice.value}
                  name={choice.value}
                  checked={colors.includes(choice.value)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setColors([...colors, choice.value]);
                    } else {
                      setColors(
                        colors.filter((color) => color !== choice.value)
                      );
                    }
                  }}
                />
              </div>
            ))}
        </div>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="p-2 border-0 rounded-lg"
        >
          {sizes.map((size) => (
            <option value={size}>{size}</option>
          ))}
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
