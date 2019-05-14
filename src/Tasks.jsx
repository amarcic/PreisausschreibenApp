import React from 'react';
import { Row, Col } from 'antd';
import Markdown from 'markdown-to-jsx';
//import { Link } from 'react-router-dom';
import Prerequisits from './Prerequisits';

export default function Tasks( props ) {

    const tasks=props.tasks;
    const conditions=props.conditions;  

    console.log(tasks);

    return(
    <div>
        <Row>
            <Col span={20} offset={1}>
                <div>{tasks.map( (task, index) => <p key={index} > <Markdown>{task.spezifizierung}</Markdown> <br /> ({task.aufgabentyp}) </p>  )}</div>
            </Col>
        </Row>
        <Row>
            <Col>
                {conditions&&conditions.length>0 && <Prerequisits conditions={conditions} /> }
            </Col>
        </Row>
    </div>
    );
}