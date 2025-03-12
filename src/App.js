import React, { useState } from "react";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Menus from "./components/Menus";
import Cart from "./components/Cart";
import { ToastContainer, toast } from "react-toastify";

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
    if (items.length > 0) {
      setFinal(!final);
    }
  };

  const handleClose = () => {
    setSelected(null);
    setOpenCart(false);
  };

  const addCarts = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleFinalOrder = () => {
    setFinal(false);

    toast.success("Order Received!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleDelete = (it) => {
    setItems(items.filter((item) => item.name !== it.name));
    if (items.length === 1) {
      setFinal(false);
    }

   ;
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

      {final && (
        <FinalOrder
          items={items}
          handleFinalOrder={handleFinalOrder}
          handleDelete={handleDelete}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
