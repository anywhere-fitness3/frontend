import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Anywhere Fitness</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="#">
              <Link to={"/"}>Home</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <Link to={"/login"}>Login</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <Link to={"/signup"}>Signup</Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
