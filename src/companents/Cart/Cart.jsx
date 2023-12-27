import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [zero, setZero] = useState([]);
  return (
    <div className="card">
      {zero.length === 0 ? (
        <div className="cart_items">Пусто</div>
      ) : (
        <div className="cart_items"></div>
      )}
    </div>
  );
};

export default Cart;
