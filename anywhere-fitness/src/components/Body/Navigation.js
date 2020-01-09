import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand className="brand">
          <Link to="/home">Anywhere Fitness</Link>
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink>
              <Link className="nav-link" to={"/login"}>
                Login
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link className="nav-link" to={"/signup"}>
                Signup
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
