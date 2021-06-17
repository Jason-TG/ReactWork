import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #03c75a;
  height: 40px;
  width: 300px;
  border: 2px solid green;
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

function CMButton(props) {
  return <StyledButton>{props.text}</StyledButton>;
}

export default CMButton;
