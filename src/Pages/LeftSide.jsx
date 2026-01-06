import axios from "axios";
import React, { useEffect, useState } from "react";

const LeftSide = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("/categories.json").then((res) => setCategories(res.data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 gap-2">
        {categories.map((category) => (
          <div
            onClick={() => setSelectedCategory(category.name.toLowerCase())}
            key={category.id}
            className={`relative w-28 h-20 rounded-md overflow-hidden cursor-pointer border-2 transition
              ${
                selectedCategory === category.name.toLowerCase()
                  ? "border-[#6F4E37]"
                  : "border-transparent"
              }`}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <h1 className="absolute inset-0 flex items-end justify-center pb-1 text-white text-sm font-semibold">
              {category.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
