import React from "react";
import { ShoppingCart } from "lucide-react";

const Nav = () => {
  return (
    <div className="nav">
      <h1>menu</h1>
      <button>
        <ShoppingCart />
      </button>
    </div>
  );
};

export default Nav;
