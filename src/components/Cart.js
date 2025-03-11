import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
const Cart = ({
  open,
  selected,
  setFinal,
  setOpenCart,
  openCart,
  addFinal,
}) => {
  const [count, setCount] = useState(0);
  if (count < 0) {
    setCount(0);
    selected.length = 0;
  }
  const { name, price, timeToMake, ingredients, image } = selected;

  const handleOrder = () => {
    const order = {
      name,
      price: price * count,
    };

    addFinal(order);
    setOpenCart(false);
    setFinal(true);
  };

  return (
    <>
      {openCart && (
        <div className={`cart ${open ? "show" : " "}`}>
          <h1>Cart</h1>
          {selected ? (
            <>
              <div className="cart-div">
                <div className="cart-item">
                  <img src={image} alt="fruit" />
                  <h2>{name}</h2>
                  <p>{timeToMake} mins</p>
                  <h3>${price}</h3>
                </div>

                <div className="cart-button">
                  <button onClick={() => setCount((count) => count + 1)}>
                    +
                  </button>
                  <span>{count}</span>
                  <button onClick={() => setCount((count) => count - 1)}>
                    -
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p>No items in the cart</p>
          )}

          <div className="menu-button">
            <button onClick={handleOrder}>
              Order now
              <span>
                <ShoppingCart />
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
