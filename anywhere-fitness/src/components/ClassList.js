import React, { useContext, useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import { ClassContext } from "../contexts/ClassContext";
import { UserContext } from '../contexts/UserContext';
import { Redirect } from "react-router-dom";

const ClassList = (props) => {

    const classList = useContext(ClassContext);

    const [courses, setCourses] = useState(classList)

    const addCourse = course => {
        setCourses([...courses, course])
    }
    const user = useContext(UserContext);

    if (!user.isAuthenticated) {
        return <Redirect to={`/login`} />;
      }

 

    return (
        <Table>
        <thead>
        <tr>
            <th>Class</th>
            <th>Time</th>
            <th>Date</th>
            <th>Duration</th>
            <th>Type</th>
            <th>Intensity</th>
            <th>Location</th>
        </tr>
        </thead>
        <tbody>
        {courses.map((workout) => (
            <tr>
                <th scope="row">{workout.workout}</th>
                <td>{workout.time}</td>
                <td>{workout.date}</td>
                <td>{workout.duration}</td>
                <td>{workout.type}</td>
                <td>{workout.intensity}</td>
                <td>{workout.location}</td>
            </tr>
        ))}
        </tbody>
        </Table>

    //insert form here... onsubmit = {addCourse}
    );
}

export default ClassList;