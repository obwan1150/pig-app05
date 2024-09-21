import React from 'react';

const Pig = ({ level }) => {
  const pigSize = level > 100 ? '200px' : `${50 + level / 10}px`; // ปรับขนาดตาม level
  const pigImage = level > 100 ? 'path/to/your/image.jpg' : 'path/to/pig/image.jpg'; // เปลี่ยนเป็นรูปภาพของคุณ

  return (
    <div>
      <img src={pigImage} alt="Pig" style={{ width: pigSize, height: pigSize }} />
      <h2>Level: {level}</h2>
    </div>
  );
};

export default Pig;
