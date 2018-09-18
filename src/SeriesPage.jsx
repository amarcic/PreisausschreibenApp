import React from 'react';

import { Row, Col, Card } from 'antd';

export default function SeriesPage( props ) {
    console.log( props.requestData );

    const data = props.requestData;

    return(
        <div style={{ marginTop: "20px", marginLeft: "80px" }}>
        <Row gutter={24}>
            <Col span={16}>
                <Card style={{ padding: "30px" }}>
                    <h2> {data.bezeichnung.join(", ") /*map( i => i + ", " )*/} </h2>
                    <div>
                        <p>
                            { data.beschreibung? "Beschreibung: " + data.beschreibung : "" } <br />
                            { data.turnus? "Turnus: " + data.turnus : "Turnus nicht bekannt." } <br />
                        </p>
                        { data.quellen && data.quellen[0].length > 0 ? <div> Serienspezifische Quellen: <ul> { data.quellen.map( (quelle, i) => <li key={i}> {quelle} </li> ) } </ul> </div> : ""}
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
    );
}