import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/Body/Navigation";
import Home from "./components/Body/Home";
import LoginForm from "./components/Form/LoginForm";
import SignUp from "./components/Form/SignUpForm";
import "./App.css";

function App(props) {
  return (
    <>
      <NavBar />
      <Route exact path="/" component={LoginForm} />
      <Route path="/signup" component={SignUp} />

      <Route exact path="/home" component={Home} />
    </>
  );
}

export default App;
