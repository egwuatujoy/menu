import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
const Cart = ({
  open,
  cartItems,
  setFinal,
  setOpenCart,
  openCart,
}) => {
  const [count, setCount] = useState(0);

  if (count < 0) {
    setCount(0);
    cartItems.length = 0;
  }

  const handleOrder = () => {
    setOpenCart(false);
    setFinal(true);
  };

  return (
    <>
      {openCart && (
        <div className={`cart ${open ? "show" : " "}`}>
          <h1>Cart</h1>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <>
                <div className="cart-div">
                  <div key={index} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>{item.timeToMake} mins</p>
                    <h3>${item.price}</h3>
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
            ))
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
