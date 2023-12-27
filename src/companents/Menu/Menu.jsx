import React from "react";
import './Menu.css';

const Menu = () => {
  const pizza = "https://dodopizza-a.akamaihd.net/static/Img/Products/d9c609f1422247f2b87b6293eb461ff0_138x138.jpeg";

  return (
    <div className="food-card">
      <img src={pizza} alt="" />
      <div className="food-details">
        <div className="food-title">Delicious Food</div>
        <div className="food-description">A tasty description of the food goes here.</div>
        <div className="food-price">$9.99</div>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Menu;