import React from "react";
import { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
// import { AAiFillMinusSquare } from "react-icons/aa";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [hovered, setHovered] = useState("");
  return (
    <div>
      <AiFillPlusCircle
        size={count + 20}
        color={count >= 12 ? "red" : `${hovered === "Plus" ? "gold" : "green"}`}
        onClick={() => setCount(count >= 12 ? count : count + 1)}
        // onMouseOver={(e) => setHovered("Plus")}
        onMouseEnter={(e) => setHovered("Plus")}
        onMouseLeave={(e) => setHovered("")}
      />
      <h1 style={{ color: `${count >= 12 ? "red" : "pink"}` }}>{count}</h1>
      {/* string vitra operation halna pare literal usee garne   */}
      <AiFillMinusCircle
        size={count + 20}
        color={
          count >= 12 ? "red" : `${hovered === "Minus" ? "gold" : "green"}`
        }
        onClick={() => setCount(count >= 12 ? count : count - 1)}
        // onMouseOver={() => setHovered("Minus")}
        onMouseEnter={() => setHovered("Minus")}
        onMouseLeave={(e) => setHovered("")}
      ></AiFillMinusCircle>
    </div>
  );
};
export default Counter;
