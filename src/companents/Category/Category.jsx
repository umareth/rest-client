import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Link to={"/menu"}>
      <div class="outer">
        <div class="inner"></div>
        <div class="item">
          <div class="item-name">
            <h4>Pizza</h4>
            <p>Fresh & sweet</p>
          </div>
          <div class="item-price">
            <p>&#36; 5</p>
            <div class="rating">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Menu;
