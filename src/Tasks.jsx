import React from 'react';
import { Row, Col } from 'antd';
//import { Link } from 'react-router-dom';
import Prerequisits from './Prerequisits';

export default function Tasks( props ) {

    const tasks=props.tasks;
    const conditions=props.conditions;

    return(
    <div>
        <h3>Aufgaben</h3>
        <Row>
            <Col span={20} offset={1}>
                <div>{tasks.map( (task, index) => <p key={index} > {task.spezifizierung} <br /> {task.aufgabentyp} </p>  )}</div>
            </Col>
        </Row>
        <Row>
            <Col>
                {conditions && <Prerequisits conditions={conditions} /> }
            </Col>
        </Row>
    </div>
    );
}