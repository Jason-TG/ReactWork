import React from 'react';
import { useSelector } from 'react-redux';

const SubTop = () => {
  const { number } = useSelector((store) => store);

  return (
    <div className="sub-container">
      <h1>SubTop</h1>
      번호 : {number}
    </div>
  );
};

export default SubTop;
