import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

function LoginForm() {
  return (
    <Container className="form-container">
      <Form className="form">
        <h1 className="form-heading">Log In to Your Account</h1>
        <FormGroup>
          <Label className="form-label" for="exampleEmail">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter Email"
          />
        </FormGroup>
        <FormGroup>
          <Label className="form-label" for="examplePassword">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Enter Password"
          />
        </FormGroup>
        <Button>Login</Button>
        <FormGroup>
          <Label className="form-label" for="examplePassword">
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </Label>
        </FormGroup>
      </Form>
    </Container>
  );
}

export default LoginForm;
