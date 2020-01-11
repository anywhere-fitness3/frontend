import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import ClassList from "../ClassList";

function EditorForm() {
  const [classCred, setClassCred] = useState({
    title: "",
    time: "",
    date: "",
    duration: "",
    type: "",
    intensity: "",
    location: ""
  });

  const submitForm = event => {
    event.preventDefault();
    function validate() {
      let isError = false;
      const errors = {
        titleError: "",
        timeError: "",
        dateError: "",
        durationError: "",
        typeError: "",
        intensityError: "",
        locationError: ""
      };

      if (classCred.title.length < 1) {
        isError = true;
        errors.titleError = "Title Cannot be empty";
        alert(errors.titleError);
      }

      if (classCred.time.length < 1) {
        isError = true;
        errors.timeError = "Time Cannot be empty";
        alert(errors.timeError);
      }

      if (classCred.date.length < 1) {
        isError = true;
        errors.dateError = "Date cannot be empty";
        alert(errors.dateError);
      }

      if (classCred.duration.length < 1) {
        isError = true;
        errors.durationError = "Duration cannot be empty";
        alert(errors.durationError);
      }
      if (classCred.type.length < 1) {
        isError = true;
        errors.typeError = "Type of class must be selected";
        alert(errors.typeError);
      }
      if (classCred.intensity.length < 1) {
        isError = true;
        errors.intensityError = "Intensity level must be selected";
        alert(errors.intensityError);
      }
      if (classCred.intensity.length < 1) {
        isError = true;
        errors.intensityError = "Location cannot be empty";
        alert(errors.intensityError);
      }

      return isError;
    }
    const err = validate();
    if (!err) {
      // clear form
      setClassCred({
        title: "",
        titleError: "",
        time: "",
        timeError: "",
        date: "",
        dateError: "",
        duration: "",
        durationError: "",
        type: "",
        typeError: "",
        intensity: "",
        intensityError: "",
        location: "",
        locationError: ""
      });
    }

    console.log(classCred);
  };

  const handleChanges = event => {
    setClassCred({ ...classCred, [event.target.name]: event.target.value });
  };
  return (
    <>
      <Container className="form-container">
        <Form className="form">
          <h1 className="form-heading">Add a New Class</h1>
          <FormGroup>
            <Label className="form-label" for="title">
              Title
            </Label>
            <Input
              onChange={handleChanges}
              type="text"
              name="title"
              id="title"
              placeholder="Enter Title"
            />
          </FormGroup>
          <FormGroup>
            <Label className="form-label" for="time">
              Time
            </Label>
            <Input onChange={handleChanges} type="time" name="time" id="time" />
          </FormGroup>
          <FormGroup>
            <Label className="form-label" for="date">
              Date
            </Label>
            <Input onChange={handleChanges} type="date" name="date" id="date" />
          </FormGroup>
          <FormGroup>
            <Label className="form-label" for="duration">
              Duration
            </Label>
            <Input
              onChange={handleChanges}
              type="number"
              name="duration"
              id="duration"
              placeholder="Enter Duration"
            />
          </FormGroup>
          <FormGroup>
            <Label className="form-label" for="type">
              Type
            </Label>
            <Input onChange={handleChanges} type="select" name="type" id="type">
              <option disabled>Type of class</option>
              <option>Circuit Training</option>
              <option>Cycling</option>
              <option>Matrial Arts</option>
              <option>Moutain Climbers</option>
              <option>Other Workout</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label className="form-label" for="intensity">
              Intensity
            </Label>
            <Input
              onChange={handleChanges}
              type="select"
              name="intensity"
              id="intensity"
            >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label className="form-label" for="location">
              Location
            </Label>
            <Input
              onChange={handleChanges}
              type="text"
              name="location"
              id="location"
              placeholder="Enter Location"
            />
          </FormGroup>
          <Button onClick={submitForm}>Add</Button>
        </Form>
      </Container>
    </>
  );
}

export default EditorForm;
