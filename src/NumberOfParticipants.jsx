import React from 'react';
import { Row, Col, List } from 'antd';

export default function NumberOfParticipants( props ) {

    const numOPart = props.numOPart;
//    console.log(numOPart);

    return( 
    <Row style={{ padding: "20px"}}>
        <List
            header={<h3>TeilnehmerInnenzahl</h3>}
            dataSource={ numOPart }
            renderItem={ item =>
                <List.Item>
                    <Col span={1} offset={1} >
                        {item.anzahl} 
                    </Col>
                    <Col>
                        {item.anmerkung}
                    </Col>
                </List.Item>
            }
        />
    </Row> );
}