import React from "react";
import CMButton from "./components/CMButton";
import CMInput from "./components/CMInput";

function PasswordConfirmPage() {
  return (
    <div>
      <h1>패스워드 확인 페이지</h1>

      <CMInput hint="password" type="password" />
      <br />
      <CMInput hint="confirm password" type="password" />
      <br />
      <CMButton text="패스워드 확인" />
    </div>
  );
}

export default PasswordConfirmPage;
