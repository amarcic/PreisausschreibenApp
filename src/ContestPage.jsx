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
    data.aufgaben.forEach( aufgabe => { aufgabe.systematik.forEach( term => {if (taskfields.indexOf(term)===-1) taskfields.push( term )} ) } );

    return(
        <div style={ { marginTop: 40 } }>
        <Row>
            <Col span={20} offset={2}>
        <h2 style={{color: "grey", marginBottom: 0}}> { participants.map( participant => participant.rolle.indexOf("ausschreibende Institution/Person")>=0 ? participant.name : "" ) } </h2><h1> {data.bezeichnung[0]} </h1> 
        <div style={{marginTop: 50}} >
        <Collapse>
            <Panel header={ data.bezeichnung.length + " Bezeichnungen"}>
                
                    {data.bezeichnung.map( label => <Tag key={label}>{label}</Tag> )}
                
            </Panel>
            <Panel header={ keywords.length + " Schlagworte"}>
                
                    {keywords.map( keyword => <Tag key={keyword}>{keyword}</Tag> )}
                
            </Panel>
            <Panel header={ taskfields.length + " Aufgabenbereiche"}>
                
                    { taskfields.map( taskfield => <Tag key={taskfield} >{taskfield}</Tag> ) }
                
            </Panel>
            {/* conditional rendering of subcompetitions panel */}
            { subcompetitions &&  
                <Panel header={ subcompetitions.length + " Teilwettbewerbe"}>
                    { subcompetitions.map( (subcomp, index) => <Tag color="magenta" key={subcomp} >{subcomp}</Tag> ) }
            </Panel>}
        </Collapse>
        </div>
        <div style={{marginTop: 50}} >
        <h2>Aufgaben, Formalia und Teilnahmevoraussetzungen</h2>
        <Collapse>
            <Panel header={ tasks.length + " Aufgabe/n"}>
            <Row>
                <Col span={20} offset={2} >
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
                </Col>
                </Row>
            </Panel>
            <Panel header={"Formalia zum Ablauf des Wettbewerbs"}>
                <Row>
                    <Col span={20} offset={2} >
                        {data.formalia}
                    </Col>
                </Row>
            </Panel>
            <Panel header={"Teilnahmevoraussetzungen"}>
                <Row>
                    <Col span={20} offset={2}>
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
                    </Col>
                </Row>
            </Panel>
        </Collapse>
        </div>
        <div style={{marginTop: 50}} >
        <h2>Ereignisse</h2>
        <Collapse>
            { events.length > 1 && <Panel header={ "Timeline: " + events.length + " Ereignisse"}>
            <Row>
                <Col span={20} offset={1}>
                    <Timeline>
                        { events.map( (event, i) =>  
                            <Timeline.Item key={i}>
                                {event.ereignistyp} 
                                {event.zeit.datum ? " am " + event.zeit.datum :
                                                "" + (event.zeit.von ? " ab " + event.zeit.von : "") + (event.zeit.bis ? " bis " + event.zeit.bis : "") + ( event.zeit.datumszusatz ? " (" + event.zeit.datumszusatz + ")" : "" )
                                                } in {event.ort? event.ort.ortsname : "Ort unbekannt"} {event.ort.ortszusatz? "(" + event.ort.ortszusatz + ")" : "" } 
                                                
                            </Timeline.Item> ) }
                    </Timeline>
                </Col>
            </Row> 
            </Panel>}
            <Panel header={ "Details zu den Ereignissen" } >
                <List
                    grid={{ gutter: 24, column: 3 }}
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
                    <Row>
                        <Col span={20} offset={2}>
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
                         </Col>
            </Row>
                    </Panel> )
                }          
            </Collapse>
        </div>
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
                <Row>
                    <Col span={20} offset={2}>
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
                    </Col>
                </Row>
            </Panel>}
            <Panel header={ sources.length + " Quellen"}>
                <List
                    size="small"
                    itemLayout="horizontal"
                    dataSource={sources}
                    renderItem={ item =>
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
        </Col>
    </Row>
    </div>
    );
}