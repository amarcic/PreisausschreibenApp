import React from 'react';
import { Row, Col, List } from 'antd';

export default function Prerequisits( props ) {
    
    let prereqs = props.prereqs;

    return(
        <Row>
            <List 
                header={<h3>Teilnahmevoraussetzungen</h3>}
                dataSource={prereqs}
                renderItem={ item =>
                    <List.Item>
                        <Col span={5} offset={1} >
                            {item.kriterium.join(", ")}
                        </Col>
                        <Col span={18}>
                            {item.beschreibung}
                        </Col>
                    </List.Item>
                }
            />
        </Row>
    );
}