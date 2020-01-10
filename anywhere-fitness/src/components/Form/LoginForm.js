import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { axiosWithAuth } from "../axiosWithAuth";
import { UserContext } from ".../contexts/UserContext"

function LoginForm(props) {
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: ""
  });

  const [user, setUser] = useState();


  const submitForm = event => {
    event.preventDefault();
    console.log(loginCred);
    axiosWithAuth()
      .post("", loginCred)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload)
        props.history.push("/protected")
      })
  };

  const handleChanges = event => {
    setLoginCred({ ...loginCred, [event.target.name]: event.target.value });
  };

  return (
    <UserContext.Provider value={user} >
      <Container className="form-container">
        <Form onSubmit={submitForm} className="form">
          <h1 className="form-heading">Log In to Your Account</h1>
          <FormGroup>
            <Label className="form-label" for="email">
              Email
            </Label>
            <Input
              onChange={handleChanges}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
          </FormGroup>
          <FormGroup>
            <Label className="form-label" for="password">
              Password
            </Label>
            <Input
              onChange={handleChanges}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </FormGroup>
          <Button>Login</Button>
          <FormGroup>
            <Label className="form-label" for="signup">
              Don't have an account? <Link to="/signup">Sign up here</Link>
            </Label>
          </FormGroup>
        </Form>
      </Container>
    </UserContext.Provider>

  );
}

export default LoginForm;
