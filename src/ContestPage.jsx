import React from 'react';

import { Row, Col, Card, List, Tag, Collapse } from 'antd';
import { Link } from 'react-router-dom';

const Panel = Collapse.Panel;

export default function ContestPage( props ) {
    console.log( props.requestData );

    const data = props.requestData;

    const events = data.ereignisse;
    const tasks = data.aufgaben;
    const keywords = data.schlagwoerter;
    const participants = data.beteiligte;
    const sources = data.quellen;

    let taskfields = [];
    data.aufgaben.forEach( aufgabe => { aufgabe.systematik.forEach( term => taskfields.push( term ) ) } );

    return(
        <div style={{ marginTop: "20px", marginLeft: "80px" }}>
        <h1> {data.bezeichnung.map( i => i + ", " )} </h1>

        <h2>Schlagworte</h2>
        <div>
            {keywords.map( (keyword, index) => <Tag key={index}>{keyword}</Tag> )}
        </div>
        <h2>Aufgabenbereiche</h2>
        <div>
            { taskfields.map( (taskfield, index) => <Tag key={index} >{taskfield}</Tag> ) }
        </div>
        <h2>Aufgaben</h2>
        <List 
            itemLayout="vertical"
            dataSource={tasks}
            renderItem={ item => (
                <List.Item>
                    <List.Item.Meta 
                        title={ <span>{item.aufgabentyp} {(item.wettbewerbskontext? <Tag color="magenta">{item.wettbewerbskontext}</Tag> : "")}  </span>}
                        description={item.spezifizierung}
                    />
                   <div>{ item.systematik.map( ( term, i ) => <Tag key={i}> {term} </Tag> ) }</div>
                </List.Item>
            )
            }
        />

        <h2>Ereignisse</h2>
        <Row gutter={24}>
            {events.map(
                (event, i) => { return(
                    <Col span={8} key={i}>
                        <Card 
                            style={event.ausgefallen? { backgroundColor: "#ff4d4f" } : { backgroundColor: "#ffffff" }}
                            title={event.ereignistyp}
                            extra={event.wettbewerbskontext? event.wettbewerbskontext.map( kontext => <Tag color="magenta" key={kontext}>{kontext}</Tag> ) : ""}
                        >
                            <span>
                            {event.zeit.datum ? event.zeit.datum :
                                "" + (event.zeit.von ? " ab " + event.zeit.von : "") + (event.zeit.bis ? " bis " + event.zeit.bis : "") + ( event.zeit.datumszusatz ? " (" + event.zeit.datumszusatz + ")" : "" )
                                }, {event.ort? event.ort.ortsname : "Ort unbekannt"} {event.ort.ortszusatz? "(" + event.ort.ortszusatz + ")" : "" }
                            </span>
                        </Card>
                    </Col>
                    )
                }


            )}
        </Row>
        <br />

        <Collapse>
            <Panel header={ participants.length + " Beteiligte"}>
                <List
                    grid={ {column: 2} }
                    itemLayout="horizontal"
                    dataSource={participants}
                    renderItem={ item => (
                        <List.Item extra={ item.wettbewerbskontext? item.wettbewerbskontext.map( kontext => <Tag key={kontext} color="magenta">{kontext}</Tag> ) : ""} >
                            <List.Item.Meta 
                                title={<span><Link to={"/dokumente/person/" + item.identifier[0]} > {item.name} </Link> als {item.rolle.map( i => i + " " ) } </span> }
                                description={item.anmerkung}
                            />
                        </List.Item>
                    )

                    }
                />
            </Panel>
            <Panel header={ sources.length + " Quellen"}>
                <List
                    size="small"
                    itemLayout="horizontal"
                    dataSource={sources}
                    renderItem={ item=>
                        <List.Item>
                            <List.Item.Meta 
                            title={item.quellenangabe}
                            description={ item.korpus===true? "Die Quelle gehört zum Korpus": "Die Quelle gehört nicht zum Kropus" }
                            />
                        </List.Item>
                    }
                />
            </Panel>
        </Collapse>
        
    </div>
    );
}