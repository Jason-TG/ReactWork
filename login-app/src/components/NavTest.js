import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from "./Header";

const NavTest = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">LoginApp</Navbar.Brand>
            LoginApp
        

        <Nav className="mr-auto">
            <Link to="/" className="nav-link">
                
            </Link>
      </Navbar>
      <br />
    </>
  );
};

export default NavTest;
