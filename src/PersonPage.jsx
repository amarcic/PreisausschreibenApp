import React from 'react';

import { Table, Layout, Card, Row, Col } from 'antd';

export default function PersonPage( props ) {

    const data = props.requestData;

    return(
        <div style={{ marginTop: "20px", marginLeft: "80px" }}>
            <Row gutter={24}>
                <Col span={16}>
                    <Card style={{ padding: "30px" }}>
                        <h2> Personendaten für <br /> {data.name.vorname} {data.name.nachname} </h2>
                        <div>
                            { data.name.alias? "Alias: " + data.name.alias.map( (i, index, arr) => i + ( index+1 < arr.length? ", " : "" ) ) : "" } <br />
                            { data.viafId? <span> ViafID:  <a target="_blank" href={"https://viaf.org/viaf/"+data.viafId} >{data.viafId}</a> </span> : "ViafId nicht bekannt." } <br />
                            { data.geschlecht? "Geschlecht: " + data.geschlecht : "Keine Angabe zum Geschlecht." } <br />
                            { ( data.namenszusatz && data.namenszusatz.bezeichnung )? "Namenszusatz: " + data.namenszusatz.bezeichnung + (data.namenszusatz.stand_stellung? " (" + data.namenszusatz.stand_stellung.map( (namenszusatz, index, arr) => namenszusatz + ( index+1 < arr.length ? ", ": "" ) ) + ")" : "") : "" }
                            { data.anmerkung? "Anmerkungen zur Person: " + data.anmerkung : "" }
                            

                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}