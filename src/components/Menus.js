import React from "react";
import Menu from "./Menu";


const Menus = ({ menus, handleClick }) => {
  return (
    <div className="menus">
      <h1>Our menu</h1>
      <div className="menu-grid">
        {menus.map((menu) => (
          <Menu menu={menu} handleClick={handleClick} key={menu.name} />
        ))}
      </div>
    </div>
  );
};

export default Menus;
