import React, { useState } from "react";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Menus from "./components/Menus";
import Cart from "./components/Cart";

// data
import smoothieMenu from "./data/Juice";

const App = () => {
  const [menus, setMenus] = useState(smoothieMenu);

  const [open, setOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const handleClick = (menu) => {
    setCartItems((prevItems) => {
      const isExist = prevItems.some((item) => item.name === menu.name);
      if (isExist) {
        return prevItems;
      }
      return [...prevItems, menu];
    });
    setOpen(true);
  };

  const handleNav = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Nav handleNav={handleNav} />
      <Homepage />
      <Menus menus={menus} handleClick={handleClick} />
      <Cart open={open} cartItems={cartItems} />
    </div>
  );
};

export default App;
