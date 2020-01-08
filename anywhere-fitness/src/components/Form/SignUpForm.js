import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
function SignUp() {
  const [signUpCred, setSignUpCred] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    instructorCode: ""
  });

  const submitForm = event => {
    event.preventDefault();
    console.log(signUpCred);
  };

  const handleChanges = event => {
    setSignUpCred({ ...signUpCred, [event.target.name]: event.target.value });
  };

  return (
    <Container className="form-container">
      <Form onSubmit={submitForm} className="form">
        <h1 className="form-heading">Sign Up For Anywhere Fitness</h1>
        <FormGroup>
          <Label className="form-label" for="firstName">
            First Name
          </Label>
          <Input
            onChange={handleChanges}
            type="name"
            name="firstName"
            id="firstName"
            placeholder="Enter First Name"
          />
        </FormGroup>
        <FormGroup>
          <Label className="form-label" for="lastName">
            Last Name
          </Label>
          <Input
            onChange={handleChanges}
            type="name"
            name="lastName"
            id="lastName"
            placeholder="Enter Last Name"
          />
        </FormGroup>
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
        <FormGroup>
          <Label className="form-label" for="confirmPassword">
            Confirm Password
          </Label>
          <Input
            onChange={handleChanges}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </FormGroup>
        <FormGroup>
          <Label className="form-label" for="instructorCode">
            Instructor Code
          </Label>
          <Input
            type="text"
            name="instructorCode"
            id="instructorCode"
            placeholder="Enter Instructor Code"
          />
        </FormGroup>
        <FormGroup check>
          <Label className="form-label" check>
            <Input type="checkbox" /> Terms and Agreements
          </Label>
        </FormGroup>
        <Button>Submit</Button>
        <FormGroup>
          <Label className="form-label" for="examplePassword">
            Already have an account? <Link to="/">Login here</Link>
          </Label>
        </FormGroup>
      </Form>
    </Container>
  );
}

export default SignUp;
