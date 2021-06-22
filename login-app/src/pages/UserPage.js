import React, { useEffect, useState } from "react";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {}, []);

  return (
    <div>
      <h1> User Page </h1>
      <hr />
      <h1> 유저 정보 테이블 </h1>
      {users.map((user) => (
        <div> 안녕 </div>
      ))}
    </div>
  );
};

export default UserPage;
