import React, { useState } from 'react';

const App = () => {
  console.log("리빌드 됨")

  import React from "react";

  let init = 0;

function App() {
  const [num, setNum] = useState(1);
                      
  /*
 함수를 선언할 때는  
const abc = () => {
};
의 형태로 하는 것이 좋다. 
 */

const increase = () => {
  setNum(num+2)
};

const decrease = () => {
  setNum(num-2)    
};

const increase2 = () => {
  console.log("increase2");
  console.log("init 값 : " + init);
  setNum(num + Number(init))
};

const decrease2 = () => {
  console.log("decrease2");
  console.log("init 값 : " + init);
  setNum(num - Number(init))
};

  const numHandle = () => {
    console.log(e);
    console.log("numHandle : " + e.target.value);

  };

  return (
    <div>
      숫자 : {num}
      <button onClick={() => setNum(num+1)}> + </button><br/>
      <button onClick={() => setNum(num-1)}> - </button><br/>
      <hr/>
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>
      <hr/>
      <input type="text" onChange={numHandle} />
      <button onClick={increase2}> + </button>
      <button onClick={decrease2}> - </button>
    </div>
  );
}

export default App;


  return (
    <div>
      
    </div>
  );
};

export default App;