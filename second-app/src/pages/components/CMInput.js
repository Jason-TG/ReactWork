import React from "react";
import styled from "styled-components";

// 이름 규칙 : CM + 태그명
// 이름 규칙 : Join + CM + 태그명
// 이름 규칙 : Join + CM + 태그명 + ?

const StyledInput = styled.input`
  height: 40px;
  width: 300px;
  border-radius: 10px;
  font-size: 20px;
  border: 2px solid gray;
`;

function CMInput(props) {
  console.log(props);
  return <StyledInput placeholder={`Enter ${props.hint}`} type={props.type} />;
}

export default CMInput;
