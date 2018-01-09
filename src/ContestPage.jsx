import React from 'react';

import { Row, Col, Card, List, Tag, Collapse, Timeline } from 'antd';
import { Link } from 'react-router-dom';

const Panel = Collapse.Panel;

export default function ContestPage( props ) {
    console.log( props.requestData );

    const data = props.requestData;
    // sort events by date; case that only value data.ereignisse.zeit.bis exists has been ignored (right now there are no such event objects in the data)
    const events = data.ereignisse.sort( (a,b) => new Date(a.zeit.datum? a.zeit.datum : a.zeit.von) - new Date(b.zeit.datum? b.zeit.datum : b.zeit.von) );
    console.log( events );
    const tasks = data.aufgaben;
    const keywords = data.schlagwoerter;
    const participants = data.beteiligte;
    const sources = data.quellen;
    const awards = data.auszeichnungen;
    let subcompetitions;
    if (data.wettbewerbsgliederung) { subcompetitions = data.wettbewerbsgliederung;}
    let comments;
    if (data.kommentare) { comments = data.kommentare }

    let taskfields = [];
    data.aufgaben.forEach( aufgabe => { aufgabe.systematik.forEach( term => taskfields.push( term ) ) } );

    return(
        <div style={{ marginTop: "20px", marginLeft: "80px" }}>
        <h1> {data.bezeichnung[0]}{ participants.map( participant => participant.rolle.indexOf("ausschreibende Institution/Person")>=0 ? ", " + participant.name : "" ) } </h1>
        {/*
        <h1> {data.bezeichnung.map( i => i + ", " )} </h1>
        
        <p>{data.bezeichnung.map( i => i + ", " )}</p>

        <h2>Schlagworte</h2>
        <div>
            {keywords.map( (keyword, index) => <Tag key={index}>{keyword}</Tag> )}
        </div>
        <h2>Aufgabenbereiche</h2>
        <div>
            { taskfields.map( (taskfield, index) => <Tag key={index} >{taskfield}</Tag> ) }
        </div>
        */}
        <div style={{marginTop: 50}} >
        <Collapse>
            <Panel header={ data.bezeichnung.length + " Bezeichnungen"}>
                
                    {data.bezeichnung.map( (label, index) => <Tag key={index}>{label}</Tag> )}
                
            </Panel>
            <Panel header={ keywords.length + " Schlagworte"}>
                
                    {keywords.map( (keyword, index) => <Tag key={index}>{keyword}</Tag> )}
                
            </Panel>
            <Panel header={ taskfields.length + " Aufgabenbereiche"}>
                
                    { taskfields.map( (taskfield, index) => <Tag key={index} >{taskfield}</Tag> ) }
                
            </Panel>
            {/* conditional rendering of subcompetitions panel */}
            { subcompetitions &&  
                <Panel header={ subcompetitions.length + " Teilwettbewerbe"}>
                    { subcompetitions.map( (subcomp, index) => <Tag color="magenta" key={index} >{subcomp}</Tag> ) }
            </Panel>}
        </Collapse>
        </div>
        <div style={{marginTop: 50}} >
        <h2>Aufgaben, Formalia und Teilnahmevoraussetzungen</h2>
        <Collapse>
            <Panel header={ tasks.length + " Aufgabe/n"}>
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
            </Panel>
            <Panel header={"Formalia zum Ablauf des Wettbewerbs"}>
                <p>
                    {data.formalia}
                </p>
            </Panel>
            <Panel header={"Teilnahmevoraussetzungen"}>
                    <List
                        dataSource={data.teilnahmevoraussetzungen}
                        renderItem={ item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={ <span> {item.kriterium.map( krit => krit + " " )} </span> } 
                                />
                                {item.beschreibung}
                            </List.Item>
                        )}
                       
                    />
            </Panel>
        </Collapse>
        </div>
        <div style={{marginTop: 50}} >
        <h2>Ereignisse</h2>
        <Collapse>
            { events.length > 1 && <Panel header={ "Timeline: " + events.length + " Ereignisse"}>
                <Timeline>
                    { events.map( (event, i) =>  
                        <Timeline.Item key={i}>
                            {event.ereignistyp} 
                            {event.zeit.datum ? " am " + event.zeit.datum :
                                            "" + (event.zeit.von ? " ab " + event.zeit.von : "") + (event.zeit.bis ? " bis " + event.zeit.bis : "") + ( event.zeit.datumszusatz ? " (" + event.zeit.datumszusatz + ")" : "" )
                                            } in {event.ort? event.ort.ortsname : "Ort unbekannt"} {event.ort.ortszusatz? "(" + event.ort.ortszusatz + ")" : "" } 
                                            
                        </Timeline.Item> ) }
                </Timeline>  
            </Panel>}
            <Panel header={ "Details zu den Ereignissen" } >
                <List
                    grid={{ gutter: 24, column: 4 }}
                    dataSource={events}
                    renderItem={ item => (
                        <List.Item>
                            <Card 
                                style={item.ausgefallen? { backgroundColor: "#ff4d4f" } : { backgroundColor: "#ffffff" }}
                                title={item.ereignistyp}
                                extra={item.wettbewerbskontext? item.wettbewerbskontext.map( kontext => <Tag color="magenta" key={kontext}>{kontext}</Tag> ) : ""}
                            >
                                <p>
                                    {item.zeit.datum ? item.zeit.datum :
                                            "" + (item.zeit.von ? " ab " + item.zeit.von : "") + (item.zeit.bis ? " bis " + item.zeit.bis : "") + ( item.zeit.datumszusatz ? " (" + item.zeit.datumszusatz + ")" : "" )
                                            }, {item.ort? item.ort.ortsname : "Ort unbekannt"} {item.ort.ortszusatz? "(" + item.ort.ortszusatz + ")" : "" } <br />
                                </p>
                                <p>{item.beschreibung ? item.beschreibung : ""}</p>
                            </Card>
                        </List.Item>
                        )
                    }
                />
            </Panel>
        </Collapse>
        </div>
        <div style={{marginTop: 50}} >
            <h2>Preise/Auszeichnungen</h2>
            <Collapse>
                {
                    awards.map( award => <Panel header={ <span> {award.wettbewerbskontext? " Auszeichnungen im Teilwettbewerb " + award.wettbewerbskontext : "Auszeichnungen"}: {award.auszeichnungsarten? award.auszeichnungsarten.map( i => i + ", " ) : "Verliehne Auszeichnungen sind nicht bekannt" } </span>} >
                        <List 
                            itemLayout="vertical"
                            dataSource={award.platzierungen}
                            renderItem={ item =>
                                <List.Item key={item.rang} >
                                    <List.Item.Meta 
                                        title={ item.rang + ". Rang"  }
                                        description={item.beschreibung}
                                    />
                                {item.platzierte.map( platzierter => <Tag key={platzierter}>{participants.map( participant => participant.identifier.indexOf(platzierter)===0? participant.name : "" )}</Tag> )}
                                </List.Item>
                            }
                        />
                    </Panel> )
                }
                {/*
                <Panel header={"Auszeichnungen nach Teilwettbewerb"} >
                    <List
                        dataSource={awards}
                        renderItem={ item =>
                            <List.Item>
                                <List.Item.Meta
                                    title={ <span> {item.auszeichnungsarten? item.auszeichnungsarten.map( i => i + ", " ) : "" } - {item.wettbewerbskontext? <Tag color="magenta" >{item.wettbewerbskontext}</Tag> : "" } </span>} 
                                />
                                <>
                            </List.Item>
                        }
                     />
                </Panel>
                */}
            </Collapse>
        </div>
{/*
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
        <Timeline>
        { events.map( (event, i) =>  
            <Timeline.Item key={i}>
                {event.ereignistyp} 
                {event.zeit.datum ? " am " + event.zeit.datum :
                                "" + (event.zeit.von ? " ab " + event.zeit.von : "") + (event.zeit.bis ? " bis " + event.zeit.bis : "") + ( event.zeit.datumszusatz ? " (" + event.zeit.datumszusatz + ")" : "" )
                                } in {event.ort? event.ort.ortsname : "Ort unbekannt"} {event.ort.ortszusatz? "(" + event.ort.ortszusatz + ")" : "" }
            </Timeline.Item> ) }
        </Timeline>
        
        <Row gutter={24}>
            {events.map(
                (event, i) => { return(
                    <Col span={8} key={i}>
                        <Card 
                            style={event.ausgefallen? { backgroundColor: "#ff4d4f" } : { backgroundColor: "#ffffff" }}
                            title={event.ereignistyp}
                            extra={event.wettbewerbskontext? event.wettbewerbskontext.map( kontext => <Tag color="magenta" key={kontext}>{kontext}</Tag> ) : ""}
                        >
                            <p>
                            {event.zeit.datum ? event.zeit.datum :
                                "" + (event.zeit.von ? " ab " + event.zeit.von : "") + (event.zeit.bis ? " bis " + event.zeit.bis : "") + ( event.zeit.datumszusatz ? " (" + event.zeit.datumszusatz + ")" : "" )
                                }, {event.ort? event.ort.ortsname : "Ort unbekannt"} {event.ort.ortszusatz? "(" + event.ort.ortszusatz + ")" : "" } <br />
                            </p>
                            <p>{event.beschreibung ? event.beschreibung : ""}</p>
                        </Card>
                    </Col>
                    )
                }


            )}
        </Row>
        
        <br />

        <List
            grid={{ gutter: 24, column: 4 }}
            dataSource={events}
            renderItem={ item => (
                <List.Item>
                    <Card 
                        style={item.ausgefallen? { backgroundColor: "#ff4d4f" } : { backgroundColor: "#ffffff" }}
                        title={item.ereignistyp}
                        extra={item.wettbewerbskontext? item.wettbewerbskontext.map( kontext => <Tag color="magenta" key={kontext}>{kontext}</Tag> ) : ""}
                    >
                        <p>
                            {item.zeit.datum ? item.zeit.datum :
                                    "" + (item.zeit.von ? " ab " + item.zeit.von : "") + (item.zeit.bis ? " bis " + item.zeit.bis : "") + ( item.zeit.datumszusatz ? " (" + item.zeit.datumszusatz + ")" : "" )
                                    }, {item.ort? item.ort.ortsname : "Ort unbekannt"} {item.ort.ortszusatz? "(" + item.ort.ortszusatz + ")" : "" } <br />
                        </p>
                        <p>{item.beschreibung ? item.beschreibung : ""}</p>
                    </Card>
                </List.Item>
            )

            }
        />
        */}
        <div style={{marginTop: 50}} >
        <h2>Beteiligte und Teilnehmerleistungen</h2>
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
            <Panel header={"Teilnehmerleistungen"} >
            </Panel>
        </Collapse>
        </div>
        <div style={{marginTop: 50}} >
        <h2>Kommentare und Quellen</h2>
        <Collapse>
            { comments && <Panel header={ comments.length + " Kommentar/e" } >
                    <List
                        itemLayout="vertical"
                        dataSource={comments}
                        renderItem={ item =>
                            <List.Item>
                                <List.Item.Meta
                                    title={ "Kommentar zu " + item.thema } 
                                />
                                {item.text}
                            </List.Item>
                        } 
                    />
            </Panel>}
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

        
    </div>
    );
}