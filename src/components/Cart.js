import React from "react";

const Cart = ({ open, cartItems }) => {
  return (
    <div className={`cart ${open ? "show" : " "}`}>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div className="cart-div">
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>{item.timeToMake} mins</p>
              <h3>${item.price}</h3>
            </div>

            <div className="cart-button">
              <button>+</button>
              <span>0</span>
              <button>-</button>
            </div>
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default Cart;
