import React, { useState } from 'react';
import Pig from './Pig';
import FoodButton from './FoodButton';

const App = () => {
  const [level, setLevel] = useState(0);

  const handleFoodClick = (foodType) => {
    let points = 0;
    if (foodType === 'แตงโม') points = 5;
    else if (foodType === 'ฟักทอง') points = 10;
    else if (foodType === 'หญ้า') points = 20;

    setLevel(prevLevel => Math.min(prevLevel + points, 100)); // เพิ่มเลเวลและจำกัดที่ 100
  };

  return (
    <div className="app">
      <h1>เกมส์เลี้ยงหมูเด้ง</h1>
      <Pig level={level} />
      <div>
        <FoodButton foodType="แตงโม" onClick={handleFoodClick} />
        <FoodButton foodType="ฟักทอง" onClick={handleFoodClick} />
        <FoodButton foodType="หญ้า" onClick={handleFoodClick} />
      </div>
    </div>
  );
};

export default App;

