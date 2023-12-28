import React, { useEffect } from "react";
import "./Category.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneRest } from "../../features/restSlice";

const Category = () => {
  const dispatch = useDispatch();
  // const restOne = useSelector((state) => state.restsReducer.oneRest)
  const { id } = useParams();
  // console.log(restOne);
  useEffect(() => {
    dispatch(fetchOneRest(id));
  }, []);
  return (
    <div className="itemsCategoory">
      {}
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
      <Link to={"/menu"}>
        <div class="outer">
          <div class="inner"></div>
          <div class="item">
            <div class="item-name">
              <h4>Pizza</h4>
              <p>Fresh & sweet</p>
            </div>
            <div class="item-price">
              <p>от &#36; 5</p>
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
    </div>
  );
};

export default Category;
