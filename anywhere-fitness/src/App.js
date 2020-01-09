import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    setClassList(ClassData);
  }, []);

  return (
    <>
      <NavBar />

      <div className="App">
        <UserContext.Provider value={classList}>
          <ClassContext.Provider value={classList}>
            <Switch>
              <PrivateRoute exact path="/protected" component={Home} />
              <Route path="/login" component={LoginForm} />
              <Route path="/signup" component={SignUp} />
              <Route path="/home" component={Home} />
            </Switch>
          </ClassContext.Provider>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
