import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const LoginPage = (props) => {

  // redux는 전역 상태 관리를 할 때 사용한다.
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault(); // submit 액션을 차단
    fetch("http://localhost:8080/login", {
      method: "post",
      headers: {
        "Content-Type": "application/jason; charset=utf-8",
      },
      body: JSON.stringify(loginUser),
    }).then((res=> {
      console.log("파싱전");
      console.log(res);
      return res.json();
    })

    } res.json()) => res=>{
      if(res.code === 1) {
        console.log(res)
        //props.history.push("/")
        //리덕스 user 정보 상태 관리.
      } else {
        alert("로그인 실패")
      }

      const changeUsername = (e) => {
        setLoginUser({
          username: e.target.value,
          password: loginUser.password,
        });
      };

      const changePassword = (e) => {
        setLoginUser({
          username: loginUser.password,
          password: e.target.value,
        });
      };

    props.history
      .push("/")
      .then((res) => {}) 
      .catch((error) => console.log(error));
  };

  const changeInput = (e) => {
    console.log(e.target.value);

    setLoginUser({
      ...loginUser,
      [e.target.name]: e.target.value,
    }); // 대괄호를 쓰면 변수명을 자유롭게 변경할 수 있다. 
  };

  return ( 
    // 내용이 여러 줄인 경우 괄호 안에 넣는다.
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control name="username" type="text" placeholder="Enter username" onChange={changeInput} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" onChange={changeInput}/>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={login}>
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
