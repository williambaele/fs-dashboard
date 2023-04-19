import { useState } from "react";
import { useItemsContext } from "../hooks/useItemsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const ItemForm = () => {
  const { dispatch } = useItemsContext();
  const { user } = useAuthContext();


  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [state, setState] = useState("");

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const item = { title, brand, size, price, state };

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
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_ITEM", payload: json });
    }
  };

  return (
    <div className="px-4 md:px-0">
      <form
        className="py-10 mx-auto container grid gap-4 w-full md:w-1/2"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center text-4xl my-4">Add a New Item</h3>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={emptyFields.includes("title") ? "error" : "p-2 rounded-lg"}
          placeholder="Item's name"
        />
        <input
          type="text"
          onChange={(e) => setBrand(e.target.value)}
          value={brand}
          className={emptyFields.includes("brand") ? "error" : "p-2 rounded-lg"}
          placeholder="brand (kg)"
        />
        <input
          type="number"
          onChange={(e) => setSize(e.target.value)}
          value={size}
          className={emptyFields.includes("size") ? "error" : "p-2 rounded-lg"}
          placeholder="Size"
        />
        <select name="" id="" className="p-2 border-0 rounded-lg">
          <option value="">Nike</option>
          <option value="">Adidas</option>
        </select>
        <select name="" id="" className="p-2 border-0 rounded-lg">
          <option value="">35.5</option>
          <option value="">Adidas</option>
        </select>
        <select name="" id="" className="p-2 border-0 rounded-lg">
          <option value="">Used</option>
          <option value="">New</option>
        </select>
        <div class="max-w">
          <label htmlFor="">Picures</label>
          <div class="md:flex">
            <div class="w-full">
              <div class="relative border-dotted h-48 rounded-lg border-2 border-[#FBAE3C] bg-white flex justify-center items-center">
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
        <input type="number" className="p-2 rounded-lg" placeholder="Price" />
        <button className="rounded-lg bg-[#FBAE3C] p-1 hover:bg-[#fbb650] text-center text-xl">
          Publish item
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default ItemForm;
