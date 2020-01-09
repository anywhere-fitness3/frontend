import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavBar from "./components/Body/Navigation";
import Home from "./components/Body/Home";
import LoginForm from "./components/Form/LoginForm";
import SignUp from "./components/Form/SignUpForm";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import { UserContext } from "./contexts/UserContext";
import { ClassContext } from "./contexts/ClassContext";
import ClassData from "./ClassData";


function App() {

  const [classList, setClassList] = useState([]);
  const [user, setUser] = useState();

  useEffect(()=>{
    setClassList(ClassData);
  }, [])

  return (
    <>
      <NavBar />

      <Router>
        <div className="App">
          <UserContext.Provider value={classList} >
            <ClassContext.Provider value={classList} >
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
            </ClassContext.Provider>
          </UserContext.Provider>
          
        </div>
      </Router>
    </>
  );
}

export default App;
