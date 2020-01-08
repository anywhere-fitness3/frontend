import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

import { axiosWithAuth } from "../axiosWithAuth"

function SignUp() {

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    instructorCode: "",
    tos: false
  })

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log(credentials);
  }

  const handleTosChange = e => {
    setCredentials({ ...credentials, tos: !credentials.tos });
    console.log(credentials);
  }

  return (
    <Container className="form-container">
      <Form onSubmit={handleSubmit} className="form">
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
            onChange={handleChange}
            placeholder="Enter Email"
            value={credentials.email}
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
            onChange={handleChange}
            value={credentials.password}
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
            onChange={handleChange}
            value={credentials.confirmPassword}
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
            onChange={handleChange}
            value={credentials.instructorCode}
            placeholder="Enter Instructor Code"
          />
        </FormGroup>
        <FormGroup check>
          <Label className="form-label" check>
            <Input type="checkbox" name="tos" value={credentials.tos} onChange={handleTosChange} checked={credentials.tos} /> Terms and Agreements
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
