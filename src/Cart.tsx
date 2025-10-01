import React from "react";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface CartProps {
  // cart: Array<{
  //   pizza: {
  //     id: string;
  //     name: string;
  //     sizes: { [key: string]: number };
  //   };
  //   size: string;
  //   price: string;
  // }>;
  cart: any[];
  checkout: () => void;
}

const Cart = ({ cart, checkout }: CartProps) => {
  const total = cart.reduce((acc, cur) => acc + cur.pizza.sizes[cur.size], 0);
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span className="size">{item.size}</span> –
            <span className="type">{item.pizza.name}</span> –
            <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
      <p>Total: {intl.format(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Cart;
