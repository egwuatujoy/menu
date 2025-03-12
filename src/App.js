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
  const [selected, setSelected] = useState(null);
  const [openCart, setOpenCart] = useState(false);
  const [order, setOrder] = useState([]);
  const [items, setItems] = useState([]);
  const [final, setFinal] = useState(false);

  const handleClick = (menu) => {
    setOpenCart(true);
    setSelected(null);
    setFinal(false);
    setSelected((selected) =>
      selected && selected.name === menu.name ? null : menu
    );
  };

  const handleNav = () => {
    setOpen(!open);
    setFinal(true)
  };

  const handleClose = () => {
    setSelected(null);
    setOpenCart(false);
  };

  const addCarts = (item) => {
    setItems((items) => [...items, item]);
  };

  return (
    <div>
      <Nav handleNav={handleNav} />
      <Homepage />
      <Menus menus={menus} handleClick={handleClick} />
      {openCart && (
        <Cart
          selected={selected}
          openCart={openCart}
          setOpenCart={setOpenCart}
          setOrder={setOrder}
          handleClose={handleClose}
          addCarts={addCarts}
          items={items}
          setFinal={setFinal}
        />
      )}

      {final && <FinalOrder items={items} />}
    </div>
  );
};

export default App;
