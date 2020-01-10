import React from 'react';
import { Row, Col, Collapse } from 'antd';

const Panel = Collapse.Panel;


export default function LabelSegment(props){

    const tags = props.tags;
    const labels = props.labels;

        return(
            <Row>
                <h2 style={{ color: "#4A5568"}}>Schlagworte und historische Bezeichnungen</h2>
                <Collapse>
                    <Panel header={ tags.length == 1 ? "1 Schlagwort" : tags.length + " Schlagwörter" }>
                        <Col offset={1}>
                            {tags.sort().join(", ")}
                            {/*still lowercase is sorted after uppercase, but should not be*/}
                        </Col>
                    </Panel>
                    <Panel header={ labels.length + " Bezeichnungen"}>
                            <Col offset={1}>
                                <ul>
                                    {labels.map( label => <li key={label}>{label}</li> )}
                                </ul>
                            </Col>
                    </Panel>
                </Collapse>
            </Row>
        );
}