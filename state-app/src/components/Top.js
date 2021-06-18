import React, { useState } from 'react';
// from은 라이브러리를 통째로 올릴 수 있다.
import '../App.css';
import Subtop from './SubTop';

// 숫자를 디스플레이
const Top = ({ number }) => {
  // const [number, setNumber] = useState(1);

  return (
    <div className="sub-container">
      <h1>Top</h1>
      <Subtop number={number} />
    </div>
  );
};

export default Top;
