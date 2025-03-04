import React, { useState } from "react";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Menus from "./components/Menus";
import Cart from "./components/Cart";

// data
import smoothieMenu from "./data/Juice";

const App = () => {
  const [menus, setMenus] = useState(smoothieMenu);

  const [selected, setSelected] = useState(null);

  const [open, setOpen] = useState(false);

  const handleClick = (menu) => {
    setSelected((selected) => (selected?.name === menu.name ? null : menu));
  };

  const handleNav = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Nav handleNav={handleNav} />
      <Homepage />
      <Menus menus={menus} handleClick={handleClick} />
      {open && <Cart />}
    </div>
  );
};

export default App;
