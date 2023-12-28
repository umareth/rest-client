import React, { useEffect } from "react";
import "./RestCard.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneRest, getRest } from "../../features/restSlice";

const RestCard = () => {
  const restaurant = useSelector((state) => state.rests.rest)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRest())
  },[])

  return (
    <>
    
    <h1 className="title_rest">Выберите ресторан</h1>
    <div class="cards-container">
      
      {restaurant.map((item) => {
        return (
          <Link to={`/category/${item._id}`}>
            <div class="card">
              <div class="card-media">
                <div class="bookmark"></div>
              </div>
              <div class="card-description">
                <div class="about-place">
                  <div class="place">
                    <p class="place-name">{item.name}</p>
                    <p class="place-speciality">{item.description}</p>
                  </div>
                  <div class="place-review">
                    <p class="rating">5 &#x2605;</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
    </>
  );
};

export default RestCard;
