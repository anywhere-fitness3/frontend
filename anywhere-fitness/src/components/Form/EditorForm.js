import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import ClassList from "../ClassList";

function EditorForm() {
  return (
    <>
      <Container className="form-container">
        <Form className="form">
          <h1 className="form-heading">Add a New Class</h1>
          <FormGroup>
            <Label className="form-label" for="email">
              Title
            </Label>
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="Enter Title"
            />
          </FormGroup>
          <FormGroup>
            <Label className="form-label" for="password">
              Time
            </Label>
            <Input
              type="time"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </FormGroup>
          <FormGroup>
            <Label className="form-label" for="password">
              Date
            </Label>
            <Input
              type="date"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </FormGroup>
          <FormGroup>
            <Label className="form-label" for="password">
              Duration
            </Label>
            <Input
              type="number"
              name="password"
              id="password"
              placeholder="Enter Duration"
            />
          </FormGroup>
          <FormGroup>
            <Label className="form-label" for="password">
              Type
            </Label>
            <Input
              type="select"
              name="password"
              id="password"
              placeholder="Enter Duration"
            >
              <option>Circuit Training</option>
              <option>Cycling</option>
              <option>Matrial Arts</option>
              <option>Moutain Climbers</option>
              <option>Other Workout</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label className="form-label" for="password">
              Intensity
            </Label>
            <Input
              type="select"
              name="password"
              id="password"
              placeholder="Enter Duration"
            >
              <option>low</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label className="form-label" for="password">
              Location
            </Label>
            <Input
              type="text"
              name="password"
              id="password"
              placeholder="Enter Location"
            />
          </FormGroup>
          <Button>Add</Button>
        </Form>
      </Container>
      <ClassList />
    </>
  );
}

export default EditorForm;
