import React, { useContext } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function NavBar() {
  const user = useContext(UserContext);
  const history = useHistory();

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand className="brand">
          <Link to="/">Anywhere Fitness</Link>
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
          {user.isAuthenticated &&
          <NavItem>
            <NavLink>
              <Link className="nav-link" onClick={() => user.signout(() => history.push("/"))}>
                Logout
              </Link>
            </NavLink>
          </NavItem>}
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
