import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
function SignUp() {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Enter Email" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
        />
      </FormGroup>
      <FormGroup>
        <Label for="confirmPassword">Confirm Password</Label>
        <Input
          type="password"
          name="password"
          id="confirmPassword"
          placeholder="Confirm Password"
        />
      </FormGroup>
      <FormGroup>
        <Label for="instructorCode">Instructor Code</Label>
        <Input
          type="password"
          name="password"
          id="instructorCode"
          placeholder="Enter Instructor Code"
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> Terms and Agreements
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default SignUp;
