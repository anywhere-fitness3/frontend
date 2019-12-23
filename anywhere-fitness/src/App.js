import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavBar from "./components/Body/Navigation";
import Home from "./components/Body/Home";
import LoginForm from "./components/Form/LoginForm";
import SignUp from "./components/Form/SignUpForm";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <>
      <NavBar />
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <Switch>
            <PrivateRoute exact path="/protected" component={Home} />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
