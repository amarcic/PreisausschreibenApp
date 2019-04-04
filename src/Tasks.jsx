import React from 'react';
import { Row, Col, Collapse } from 'antd';
//import { Link } from 'react-router-dom';
import Prerequisits from './Prerequisits';

const Panel = Collapse.Panel;

export default function Tasks( props ) {

    const tasks=props.tasks;
    const conditions=props.conditions;
    const formalia=props.formalia;

    return(
    <div>
        <Row>
            <Col span={20} offset={1}>
                <div>{tasks.map( (task, index) => <p key={index} > {task.spezifizierung} <br /> ({task.aufgabentyp}) </p>  )}</div>
            </Col>
        </Row>
        <Row>
            <Col>
                {conditions && <Prerequisits conditions={conditions} /> }
            </Col>
        </Row>
        <Collapse>
            { formalia && <Panel header={"Formalia"} >
                    <Row>
                        <Col span={20} offset={1}>
                            {formalia}
                        </Col>
                    </Row>
            </Panel>}
        </Collapse>
    </div>
    );
}