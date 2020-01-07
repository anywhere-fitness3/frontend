import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

function LoginForm() {
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: ""
  });

  const submitForm = event => {
    event.preventDefault();
    console.log(loginCred);
  };

  const handleChanges = event => {
    setLoginCred({ ...loginCred, [event.target.value]: event.target.value });
  };

  return (
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
  );
}

export default LoginForm;
