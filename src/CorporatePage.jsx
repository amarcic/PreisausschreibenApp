import React from 'react';

import { Card, Row, Col } from 'antd';
//import { List, Card } from 'antd';

export default function CorporatePage( props ) {
    //console.log( props.requestData );

    const data = props.requestData;

    return(
        <div style={{ marginTop: "20px", marginLeft: "80px" }}>
        <Row gutter={24}>
            <Col span={8}>
                <Card style={{ padding: "30px" }}>
                    <h2>{ data.bezeichnung.map( label => label + ", " ) }</h2>
                    <div>
                        { "Art der Körperschaft: " + data.art } <br />
                        { data.ort? "Ort: " + data.ort : "" } <br />
                        { data.anmerkung? "Anmerkung zur Körperschaft: <br />" + data.anmerkung : "" }                        
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
    );
}