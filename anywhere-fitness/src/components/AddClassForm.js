import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function AddClassForm() {
    return (
        <Form>
            <FormGroup>
                <Input type="text" name="name" placeholder="Name" />
                <Input type="datetime" name="datetime" placeholder="Date and time" />
            </FormGroup>
        </Form>
    )
}