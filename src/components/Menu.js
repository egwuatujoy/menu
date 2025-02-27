import React from "react";
import { ShoppingCart } from "lucide-react";

const Menu = ({ menu }) => {
  return (
    <div className="menu">
      <img src={menu.image} alt="menu-image" />

      <div className="menu-pricing">
        <div className="menu-name">
          <h2>{menu.name}</h2>
          <p>{menu.timeToMake} mins</p>
        </div>

        <h3>${menu.price}</h3>
      </div>

      <div className="menu-button">
        <button>
          Order now
          <span>
            <ShoppingCart />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
