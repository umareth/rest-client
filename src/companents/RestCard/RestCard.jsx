import React from 'react'
import './RestCard.css'
import { MdFavoriteBorder } from "react-icons/md";
import restOne from '../img/fd1bbd6b145faadacf687bf0fa3b59cf.jpg'

const RestCard = () => {
  return (
    <div class = "cards-container">
    <div class = "card">
      <div class = "card-media">

        <div class = "bookmark"></div>
      </div>
      <div class = "card-description">
        <div class = "about-place">
          <div class = "place">
            <p class = "place-name">Pizza Hut</p>
            <p class = "place-speciality">Italian, Fast Food, Beverages</p>
          </div>
          <div class = "place-review">
            <p class = "rating">4.6 &#x2605;</p>
    
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default RestCard