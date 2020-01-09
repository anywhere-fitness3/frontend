import React, { useContext } from 'react';
import { Table } from 'reactstrap';
import { ClassContext } from "../contexts/ClassContext";

const ClassList = (props) => {
    
    classList = useContext(ClassContext);

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
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
        </tbody>
    </Table>
    );
}

export default ClassList;