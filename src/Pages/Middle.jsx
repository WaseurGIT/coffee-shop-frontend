import axios from "axios";
import React, { useEffect, useState } from "react";

const Middle = ({ selectedCategory }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/items.json").then((res) => setItems(res.data));
  }, []);

  const filteredItems = items.filter((i) => i.category === selectedCategory);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="relative w-40 h-32 rounded-lg overflow-hidden shadow mx-2"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <h1 className="absolute bottom-2 left-0 right-0 text-center text-white text-sm font-semibold px-1">
            {item.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Middle;
