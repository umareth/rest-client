import React from "react";
import "./Menu.css";

const Menu = () => {
  const pizza =
    "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg";

  return (
    <div className="food-card">
      <img className="food-image" src={pizza} alt="" />
      <div className="food-details">
        <div className="food-title">Delicious Food</div>
        <div className="food-description">
          A tasty description of the food goes here.
        </div>
        <div className="item_1">
          <div className="food-price">от $9.99</div>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
