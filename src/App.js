// 1. css  연결
// 2. 바닐라 javascript 문법 - 커멜, 자동완성
// 3. 부트스트랩, 스타일 컴포넌트

import styled from "styled-components";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import PasswordConfirmPage from "./pages/PasswordConfirmPage";

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Box = styled.div`
  background-color: white;
  border: 10px solid black;
  width: 200px;
  height: 100px;
  margin: 0 auto;
`;

function App() {
  var container = {
    backgroundColor: "antiquewhite",
    width: "80%",
    margin: "0 auto",
  };

  return (
    <div style={container}>
      <Title>안녕</Title>
      <Title>스타일 컴포넌트</Title>
      <Box></Box>
      <Box></Box>
      <hr />
      <LoginPage />
      <hr />
      <JoinPage />
      <hr />
      <PasswordConfirmPage />
    </div>
  );
}

export default App;
