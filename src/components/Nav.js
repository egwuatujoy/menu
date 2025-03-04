import React from "react";
import { ShoppingCart } from "lucide-react";

const Nav = ({ handleNav }) => {
  return (
    <div className="nav">
      <h1>menu</h1>
      <button onClick={handleNav}>
        <ShoppingCart />
      </button>
    </div>
  );
};

export default Nav;
