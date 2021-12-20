import React, { ChangeEvent, useCallback, useState } from "react";
import { IProductEntry } from "../../state/products/productsState";
import { Form } from "antd";
import * as api from "../../common/api";
import * as S from "./AddItem.style";

const AddItem = () => {
  const [data, setData] = useState<Omit<IProductEntry, "_id">>({
    name: "",
    category: "",
    image: "",
    price: 0,
    countInStock: 0,
    brand: "",
    rating: 0,
    numReviews: 0,
    description: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setData((prev) => ({
      ...prev,
      [event.target.name]: value,
    }));
  }

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await api.addItem(data);
        console.log(response);
      } catch (error) {}
    },
    [data]
  );

  console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={data.name}
            onChange={handleChange}
            name={"name"}
          />
        </label>
        <label>
          Category
          <input
            type="text"
            value={data.category}
            onChange={handleChange}
            name={"category"}
          />
        </label>
        <label>
          Image
          <input
            type="text"
            value={data.image}
            onChange={handleChange}
            name={"image"}
          />
        </label>
        <label>
          Price
          <input
            type="text"
            value={data.price}
            onChange={handleChange}
            name={"price"}
          />
        </label>
        <label>
          Count in stock
          <input
            type="text"
            value={data.countInStock}
            onChange={handleChange}
            name={"countInStock"}
          />
        </label>
        <label>
          Brand
          <input
            type="text"
            value={data.brand}
            onChange={handleChange}
            name={"brand"}
          />
        </label>
        <label>
          Rating
          <input
            type="text"
            value={data.rating}
            onChange={handleChange}
            name={"rating"}
          />
        </label>
        <label>
          Num reviews
          <input
            type="text"
            value={data.numReviews}
            onChange={handleChange}
            name={"numReviews"}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            value={data.description}
            onChange={handleChange}
            name={"description"}
          />
        </label>
        <button onClick={handleSubmit}></button>
      </form>
    </div>
  );
};

export default AddItem;
