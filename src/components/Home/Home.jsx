import React, { useState } from "react";
import LeftSide from "../../Pages/LeftSide";
import Middle from "../../Pages/Middle";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("coffee");

  return (
    <div className="px-5 py-2">
      <div className="flex justify-center gap-3">
        <LeftSide
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        ></LeftSide>
        <Middle selectedCategory={selectedCategory}></Middle>
      </div>
    </div>
  );
};

export default Home;
