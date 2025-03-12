import { ShoppingCart } from "lucide-react";

const FinalOrder = ({ items, handleFinalOrder, handleDelete }) => {
  console.log(items);

  const totalBill = items.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="final">
      <h1>Order Receieved</h1>
      {items.map((item) => (
        <div className="final-item">
          <button onClick={() => handleDelete(item)}>X</button>

          <img src={item.image} alt="fruit" />

          <div className="final-price">
            <div>
              <h3> {item.name}</h3>
              <p>${item.price}</p>
            </div>

            <button>X{item.count} </button>
          </div>
        </div>
      ))}

      <div className="total-bill">
        <h3>Total Bill: ${totalBill} </h3>
      </div>
      <div className="menu-button">
        <button onClick={handleFinalOrder}>
          Place Order
          <span>
            <ShoppingCart />
          </span>
        </button>
      </div>
    </div>
  );
};

export default FinalOrder;
