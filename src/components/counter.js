import React from "react";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
// import { AAiFillMinusSquare } from "react-icons/aa";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <AiFillPlusCircle
        size={count + 20}
        color={count >= 12 ? "red" : `${hovered ? "gold" : "green"}`}
        onClick={() => setCount(count >= 12 ? count : count + 1)}
        onMouseOver={() => setHovered(true)}
      />
      <h1 style={{ color: `${count >= 12 ? "red" : "pink"}` }}>{count}</h1>
      {/* string vitra operation halna pare literal usee garne   */}
      <button onClick={() => setCount(count > 1 ? count - 1 : count)}>-</button>
    </div>
  );
};
export default Counter;
