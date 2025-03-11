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
  const [selected, setSelected] = useState({});
  const [final, setFinal] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [order, setOrder] = useState([]);
  const [finalOrder, setfinalOrder] = useState([]);

  const handleClick = (menu) => {
    setOpenCart(true);
    setFinal(false);
    setSelected((selected) => (selected.name === menu.name ? {} : menu));
  };

  const handleNav = () => {
    setOpen(!open);
  };

  const addFinal = (order) => {
    console.log(order);
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
          setFinal={setFinal}
          setOrder={setOrder}
          addFinal={addFinal}
        />
      )}

      {final && <FinalOrder />}
    </div>
  );
};

export default App;
