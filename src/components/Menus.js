import React from "react";
import Menu from "./Menu";

const Menus = ({ menus, handleClick }) => {

  return (
    <div className="menus">
      <h1>Our menu</h1>
      <div className="menu-grid">
        {menus.map((menu, index) => (
          <Menu menu={menu} handleClick={handleClick} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Menus;
