import React from "react";
import CMButton from "./components/CMButton";
import CMInput from "./components/CMInput";

function LoginPage() {
  return (
    <div>
      <h1>로그인 페이지</h1>

      <CMInput hint="username" type="text" />
      <br />
      <CMInput hint="password" type="password" />
      <br />
      <CMButton text="로그인" />
    </div>
  );
}

export default LoginPage;
