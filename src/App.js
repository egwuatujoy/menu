import React, { useState } from "react";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Menus from "./components/Menus";
import Cart from "./components/Cart";

// data
import smoothieMenu from "./data/Juice";
import FinalOrder from "./components/FinalOrder";

const App = () => {
  const [menus, setMenus] = useState(smoothieMenu);

  const [open, setOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const [final, setFinal] = useState(false);

  const [openCart, setOpenCart] = useState(false);
  function getOrder() {
    setFinal(!final);
  }

  const handleClick = (menu) => {
    setOpenCart(!openCart);

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
      <Cart
        open={open}
        cartItems={cartItems}
        setOpenCart={setOpenCart}
        openCart={openCart}
        setFinal={setFinal}
        openCart={openCart}
      />
      {final && <FinalOrder />}
    </div>
  );
};

export default App;
