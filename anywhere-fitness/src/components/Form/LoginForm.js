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
    function validate() {
      let isError = false;
      const errors = {
        emailError: "",
        passwordError: ""
      };

      if (loginCred.password.length < 5) {
        isError = true;
        errors.passwordError = "Password needs to be atleast 5 characters long";
        alert(errors.passwordError);
      }

      if (loginCred.email.indexOf("@") === -1) {
        isError = true;
        errors.emailError = "Requires valid email";
        alert(errors.emailError);
      }

      return isError;
    }
    const err = validate();
    if (!err) {
      // clear form
      setLoginCred({
        email: "",
        emailError: "",
        password: "",
        passwordError: ""
      });
    }

    console.log(loginCred);
  };

  const handleChanges = event => {
    setLoginCred({ ...loginCred, [event.target.name]: event.target.value });
  };

  return (
    <Container className="form-container">
      <Form className="form">
        <h1 className="form-heading">Log In to Your Account</h1>
        <FormGroup>
          <Label className="form-label" for="email">
            Email
          </Label>
          <Input
            errorText={loginCred.emailError}
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
            errorText={loginCred.passwordError}
            onChange={handleChanges}
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
        </FormGroup>
        <Button onClick={submitForm}>Login</Button>
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
