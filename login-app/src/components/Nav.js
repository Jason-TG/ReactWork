import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <link to="/"> Home </link>
        </li>
        <li>
          <Link to="/user"> User </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
