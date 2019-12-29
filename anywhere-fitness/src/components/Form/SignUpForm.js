import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
function SignUp() {
  return (
    <Container className="form-container">
      <Form className="form">
        <h1 className="form-heading">Sign Up For Anywhere Fitness</h1>
        <FormGroup>
          <Label className="form-label" for="exampleEmail">
            Email
          </Label>
          <Input
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
            type="password"
            name="password"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </FormGroup>
        <FormGroup>
          <Label className="form-label" for="instructorCode">
            Instructor Code
          </Label>
          <Input
            type="password"
            name="password"
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
