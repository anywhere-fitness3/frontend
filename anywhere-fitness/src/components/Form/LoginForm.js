import React from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

function LoginForm() {
  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter Email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Enter Password"
          />
        </FormGroup>
        <Button>Login In</Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
