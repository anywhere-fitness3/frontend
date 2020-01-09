import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { axiosWithAuth } from "../axiosWithAuth";

function SignUp() {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    instructorCode: "",
    tos: false
  });

  const handleSubmit = e => {
    e.preventDefault();

    function validate() {
      let isError = false;
      const errors = {
        emailError: "",
        passwordError: "",
        firstNameError: "",
        lastNameError: ""
      };

      if (credentials.password.length < 5) {
        isError = true;
        errors.passwordError = "Password needs to be atleast 5 characters long";
        alert(errors.passwordError);
      }

      // if ((credentials.firstName = "[a-zA-Z0-9!@#$%^*_|]")) {
      //   isError = true;
      //   errors.firstNameError =
      //     "First name cannot contain special characters or numbers";
      //   alert(errors.firstNameError);
      // }

      // if ((credentials.lastNameError = "[a-zA-Z0-9!@#$%^*_|]")) {
      //   isError = true;
      //   errors.lastNameError =
      //     "Last name cannot contain special characters or numbers";
      //   alert(errors.lastNameError);
      // }

      if (credentials.email.indexOf("@") === -1) {
        isError = true;
        errors.emailError = "Requires valid email";
        alert(errors.emailError);
      }

      return isError;
    }
    const err = validate();
    if (!err) {
      // clear form
      setCredentials({
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        instructorCode: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: "",
        tos: ""
      });
    }
    // axiosWithAuth()
    //   .post("")
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    console.log(credentials);
  };

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log(credentials);
  };

  const handleTosChange = e => {
    setCredentials({ ...credentials, tos: !credentials.tos });
    console.log(credentials);
  };

  return (
    <Container className="form-container">
      <Form className="form">
        <h1 className="form-heading">Sign Up For Anywhere Fitness</h1>
        <FormGroup>
          <Label className="form-label" for="firstName">
            First Name
          </Label>
          <Input
            onChange={handleChange}
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
            onChange={handleChange}
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
            errorText={credentials.emailError}
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
            errorText={credentials.emailError}
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            value={credentials.password}
            placeholder="Enter Password"
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
            <Input
              type="checkbox"
              name="tos"
              value={credentials.tos}
              onChange={handleTosChange}
              checked={credentials.tos}
            />
            Terms and Agreements
          </Label>
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
        <FormGroup>
          <Label className="form-label" for="LoginIn">
            Already have an account? <Link to="/">Login here</Link>
          </Label>
        </FormGroup>
      </Form>
    </Container>
  );
}

export default SignUp;
