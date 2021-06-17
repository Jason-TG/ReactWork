import React from "react";
//
// 클래스형 컴포넌트 => 함수형 => hooks => 리덕스(Rx) => Mobs(Rx)
//
// 일반 함수
// 화살표 함수
// 함수 이름
//
function App() {
  const [num, setNum] = useState(1);

  let count = 1;
}

//
// 함수 생성 방법
// 1. 기본 함수
function add() {
  count++;
  console.log(count);

  setNum(num + 1);
  console.log(num);
}
// 2. 기본 함수
const increase1 = function () {};
const increase2 = () => {};

return (
  <div>
    <h1>
      {" "}
      num : {num} count : {count}
    </h1>
    <button onClick={function () {}}> + </button> <br />
    <button onClick={() => {}}> + </button> <br />
    <button onClick={add}> + </button> <br />
    <button></button>
    {/* 안에 든 함수가 하나인 경우 화살표를 쓰면 중괄호와 리턴까지 실행한다.  */}
    <button onClick={() => add()}> + </button> <br />
    <button
      onClick={() => {
        return add();
      }}
    >
      +
    </button>{" "}
    <br />
    <button onClick={increase}> + </button> <br />
  </div>
);
export default App;
