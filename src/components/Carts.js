// import React, { useState } from "react";

// const Carts = ({ item }) => {
//   const [count, setCount] = useState(0);

//   if (count < 0) {
//     setCount(0);
//   }
//   return (
//     <div>
//       <div className="cart-div">
//         <div className="cart-item">
//           <img src={item.image} alt={item.name} />
//           <h2>{item.name}</h2>
//           <p>{item.timeToMake} mins</p>
//           <h3>${item.price}</h3>
//         </div>

//         <div className="cart-button">
//           <button onClick={() => setCount((count) => count + 1)}>+</button>
//           <span>{count}</span>
//           <button onClick={() => setCount((count) => count - 1)}>-</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carts;
