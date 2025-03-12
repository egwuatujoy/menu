import { ShoppingCart } from "lucide-react";

const FinalOrder = ({ items }) => {
  console.log(items);

  // const totalBilpl = items.map((item) => item.price + item)
  return (
    <div className="final">
      <h1>Order Receieved</h1>
      {items.map((item) => (
        <div className="final-item">
          <img src={item.image} alt="fruit" />
          <div className="final-details">
            <div>
              <h3> {item.name}</h3>
              <p>{item.price}</p>
            </div>
            <button>X{item.count} </button>
          </div>
        </div>
      ))}

      <div className="total-bill">
        <h3>Total Bill:</h3>
      </div>
      <div className="menu-button">
        <button>
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
