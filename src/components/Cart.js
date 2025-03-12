import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

const Cart = ({
  selected,
  handleClose,
  addCarts,
  items,
  setOpenCart,
  setFinal,
}) => {
  console.log(selected);
  const isAdded = items.map((item) => item.name).includes(selected.name);
  // console.log(isAdded);
  const [received, setReceived] = useState({});
  const [count, setCount] = useState(0);

  useEffect(
    function () {
      function getOrder() {
        setReceived(selected);
      }
      getOrder();
    },
    [selected]
  );

  const { name, price, timeToMake, ingredients, image } = received;

  const handleSelected = () => {
    setOpenCart(false);
    const newCarts = {
      name,
      price: price * count,
      image,
      count,
    };
    addCarts(newCarts);
    setFinal(true);
  };

  return (
    <div className="cart">
      <button onClick={handleClose}>&larr;</button>

      <h1>Cart</h1>

      <div className="cart-div">
        <img src={image} alt="fruit" />

        <div className="cart-prices">
          <div>
            <h2>{name}</h2>
            <div className="ingredients">
              {ingredients?.map((ingre) => (
                <p>{ingre}</p>
              ))}
            </div>
            <p>{timeToMake} mins</p>
          </div>

          <h3>${price}</h3>
        </div>
      </div>

      <div className="cart-button">
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <span>{count}</span>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
      </div>

      <div className="menu-button">
        {!isAdded ? (
          <button onClick={handleSelected}>
            Place Order
            <span>
              <ShoppingCart />
            </span>
          </button>
        ) : (
          <h1>Item already added</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
