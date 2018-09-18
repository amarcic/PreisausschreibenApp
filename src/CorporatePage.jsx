import React from 'react';

import { Card, Row, Col } from 'antd';

import withLookup from './withLookup';
import CompetitionList from './CompetitionList';

export default function CorporatePage( props ) {
    //console.log( props.requestData );

    const data = props.requestData;
    const CompListWithLookup = withLookup( CompetitionList );

    return(
        <div style={{ marginTop: "20px", marginLeft: "80px" }}>
        <Row gutter={24}>
            <Col span={16}>
                <Card style={{ padding: "30px" }}>
                    <h2>{ data.bezeichnung.join(", ") /*.map( (label, index, arr) => label + ( index+1 < arr.length? ", ": "") )*/ }</h2>
                    <div>
                        { "Art der Körperschaft: " + data.art } <br />
                        { data.ort? "Ort: " + data.ort : "" } <br />
                        { data.anmerkung? "Anmerkung zur Körperschaft: " + data.anmerkung : "" }                        
                    </div>
                </Card>
            </Col>
            <Col span={8} >
               <CompListWithLookup query={data._id} view="inPreisausschreiben" />
            </Col>
        </Row>
    </div>
    );
}