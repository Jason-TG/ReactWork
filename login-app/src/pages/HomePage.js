import Nav from "../components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// 리액트 클래스 컴포넌트 기반 (x)
// 리액트 hooks => 함수형 기반 (o) => use* 함수를 사용 가능
const HomePage = () => {
  const [user, setUser] = useState("홍길동");

  // 생성자 (조건이 필요한 생성자)
  // Dependency List
  useEffect(() => {
    fetch("http://localhost:8080/user/1")
      // const user = fetch('http://localhost:8080/user/1');
      .then((res) => res.text())
      .then((res) => {
        console.log("통신 성공");
        console.log(res);
        setUser(res);
      })
      .catch((error) => {
        // then 내부에서 실패하면 발생
        console.log("에러 발생함");
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1> Home Page </h1>
      <h3> 접속한 유저 이름 {user.username}</h3>
      <hr />
    </div>
  );
};

export default HomePage;
