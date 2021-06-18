import React from 'react';
import { useDispatch } from 'react-redux';
import { decrease, increase } from '../store';

const SubBottom = () => {
  //
  const dispatcher = useDispatch();

  return (
    <div className="sub-container">
      <h1> Bottom </h1>
      <botton onClick={() => dispatcher(increase())}> 증가 </botton>
      <botton onClick={() => dispatcher(decrease())}> 증가 </botton>
    </div>
  );
};

export default SubBottom;
