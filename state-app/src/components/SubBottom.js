import React from 'react';

const SubBottom = ({ increase }) => {
  //
  const { increase } = props;

  return <div>{<button onClick={increase}> 증가 </button>}</div>;
};

export default SubBottom;
