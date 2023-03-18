///////////////////////////////////////////
import React from 'react';

import styled from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <div className={styled.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>Choose your favorite from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
      <p>All our meals are cooked with hight-quality ingredients, just-in-time and of course by experienced chefs!</p>
    </div>
  )
}

export default MealsSummary;