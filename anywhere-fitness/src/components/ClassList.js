import React, { useContext } from 'react';
import { Table } from 'reactstrap';
import { ClassContext } from "../contexts/ClassContext";

const ClassList = (props) => {

    const classList = useContext(ClassContext);

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
        {classList.map((workout) => (
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
    );
}

export default ClassList;