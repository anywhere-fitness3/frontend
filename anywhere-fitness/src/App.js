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
import ClassList from "./components/ClassList";
import Editor from "./components/Body/Editor";
import { axiosWithAuth } from "./components/axiosWithAuth";
import { fakeAuth } from "./contexts/UserContext"

function App() {
  const [classList, setClassList] = useState([]);
  const [user, setUser] = useState({});


  useEffect(() => {
    setClassList(ClassData);
    setUser(fakeAuth);
    // axiosWithAuth()
    //   .get("")
    //   .then(res => {
    //     console.log(res);
    //     setClassList(res.data)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }, []);

  // const getClassData = () => {
  //   axiosWithAuth()
  //     .get("")
  //     .then(res => {
  //       console.log(res);
  //       setClassList(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>

      <div className="App">
      <UserContext.Provider value={user}>
        <NavBar />

          <ClassContext.Provider value={classList}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={LoginForm} />
              <Route path="/signup" component={SignUp} />
              <PrivateRoute path="/ClassList" component={ClassList} />
              <Route path="/Editor" component={Editor} />
            </Switch>
          </ClassContext.Provider>
        </UserContext.Provider>

      </div>

    </>
  );
}

export default App;
