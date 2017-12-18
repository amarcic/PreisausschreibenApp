import React from 'react';

import { Row, Col, Card, List } from 'antd';

export default function ContestPage( props ) {
    console.log( props.requestData );

    const data = props.requestData;

    const events = data.ereignisse;
    const tasks = data.aufgaben;


    return(
        <div style={{ marginTop: "20px", marginLeft: "80px" }}>
        <h1> {data.bezeichnung.map( i => i + ", " )} </h1>
        <h2>Aufgaben</h2>
        <List 
            itemLayout="horizontal"
            dataSource={tasks}
            renderItem={ item => (
                <List.Item>
                    <List.Item.Meta 
                        title={item.aufgabentyp + " (" + item.wettbewerbskontext + ")" }
                        description={item.spezifizierung}
                    />
                   
                </List.Item>
            )
            }
        />

        <h2>Ereignisse</h2>
        <Row gutter={24}>
            {events.map(
                (event, i) => { return(
                    <Col span={8}>
                        <Card key={i} title={event.ereignistyp} >
                            <span>
                            {event.zeit.datum ? event.zeit.datum :
                                "" + (event.zeit.von ? " ab " + event.zeit.von : "") + (event.zeit.bis ? " bis " + event.zeit.bis : "") + ( event.zeit.datumszusatz ? " (" + event.zeit.datumszusatz + ")" : "" )
                                } , {event.ort? event.ort.ortsname : "Ort unbekannt"} {event.ort.ortszusatz? "(" + event.ort.ortszusatz + ")" : "" }
                            </span>
                        </Card>
                    </Col>
                    )
                }


            )}
        </Row>
    </div>
    );
}