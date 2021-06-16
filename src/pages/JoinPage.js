import React from "react";
import CMInput from "./components/CMInput";
import CMButton from "./components/CMButton";

function JoinPage() {
  return (
    <div>
      <h1>회원가입 페이지</h1>
      <CMInput hint="username" type="text" />
      <br />
      <CMInput hint="password" type="password" />
      <br />
      <CMInput hint="email" type="text" />
      <br />
      <CMInput hint="tel" type="text" />
      <br />
      <CMButton text="회원가입" />
    </div>
  );
}

export default JoinPage;
