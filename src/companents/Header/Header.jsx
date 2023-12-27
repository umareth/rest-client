import React from "react";
import "./Header.css";
import { FiShoppingCart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { IoBagOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">Logo</div>
      <div className="header_search">
        <input className="header_input" type="text" />
      </div>
      <div className="header_nav">
        <ul className="header_ul">
          <li className="header_li"><Link to={"auth"}><span><BiUser /></span><span>Войти</span></Link></li>
          <li className="header_li"><span><MdFavoriteBorder /></span><span>Избраное</span></li>
          <li className="header_li"><span><IoBagOutline /></span><span>Заказы</span></li>
          <li className="header_li"><span><FiShoppingCart /></span><span>Корзина</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
