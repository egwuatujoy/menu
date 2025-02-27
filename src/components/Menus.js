import React from "react";
import Menu from "./Menu";
const Menus = ({ menus }) => {
  return (
    <div className="menus">
      <h1>Our menu</h1>
      <div className="menu-grid">
        {menus.map((menu) => (
          <Menu menu={menu} />
        ))}
      </div>
    </div>
  );
};

export default Menus;
