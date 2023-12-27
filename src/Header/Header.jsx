import React from "react";
import "./Header.css";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">Logo</div>
      <div className="header_search">
        <input type="text" />
      </div>
      <div className="header_nav">
        <ul>
          <li><span><FiShoppingCart /></span><span>Войти</span></li>
          <li><span><FiShoppingCart /></span><span>Избраное</span></li>
          <li><span><FiShoppingCart /></span><span>Заказы</span></li>
          <li><span><FiShoppingCart /></span><span>Корзина</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
