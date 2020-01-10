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
import { axiosWithAuth } from "./components/axiosWithAuth";
import FakeUser from "./FakeUser";


function App() {

  useEffect(()=>{
    setClassList(ClassData);
    setUser(FakeUser);
    // axiosWithAuth()
    //   .get("")
    //   .then(res => {
    //     console.log(res);
    //     setClassList(res.data)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }, [])

  const getClassData = () => {
    axiosWithAuth()
      .get("")
      .then(res => {
        console.log(res);
        setClassList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <NavBar />

        <div className="App">
            <ClassContext.Provider value={classList} >
              <Switch>
                <PrivateRoute exact path="/protected" component={Home} />
                <Route path="/login" component={LoginForm} />
                <Route path="/signup" component={SignUp} />
              </Switch>
            </ClassContext.Provider>
          
        </div>
    </>
  );
}

export default App;
