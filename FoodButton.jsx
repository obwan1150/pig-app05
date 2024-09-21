import React from 'react';

const FoodButton = ({ foodType, onClick }) => {
  return (
    <button onClick={() => onClick(foodType)}>
      {foodType}
    </button>
  );
};

export default FoodButton;
