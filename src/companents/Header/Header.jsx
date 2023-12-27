import React, { useState } from "react";
import "./Header.css";
import { FiShoppingCart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { IoBagOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";

const Header = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <div className="header">
      <div onClick={() => navigate("/")} className="header_logo">Logo</div>
      <div className="header_search">
        <input className="header_input" type="text" />
      </div>
      <div className="header_nav">
        <ul className="header_ul">
          <li onClick={() => navigate('/auth')} className="header_li"><span><BiUser /></span><span>Войти</span></li>
          <li className="header_li"><span><MdFavoriteBorder /></span><span>Избраное</span></li>
          <li className="header_li"><span><IoBagOutline /></span><span>Заказы</span></li>
          <li  onClick={() => setOpen(!open)} className="header_li"><span><FiShoppingCart /></span><span>Корзина</span></li>
        </ul>
      </div>
      {open ? <Cart/> : ""}
    </div>
  );
};

export default Header;
