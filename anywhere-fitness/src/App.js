import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/Body/Navigation";
import Home from "./components/Body/Home";
import LoginForm from "./components/Form/LoginForm";
import SignUp from "./components/Form/SignUpForm";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignUp} />
    </>
  );
}

export default App;
