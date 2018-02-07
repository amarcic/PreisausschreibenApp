import React from 'react';

import { Row, Col, Card, List, Tag, Collapse, Timeline, Tabs, Icon, Popover } from 'antd';
import { Link } from 'react-router-dom';

const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;

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
    let rankedParticipants = [];
    awards.forEach( award => 
        {
            if (award.platzierungen) {
                award.platzierungen.forEach( rank => {
                    if( rank.platzierte ) {
                        rank.platzierte.forEach( ranked =>
                            rankedParticipants.push(ranked)
                        );
                    }
                } );
            }
        } 
    );
    
    let subcompParticipants = {};
    participants.forEach( participant => {
        if(participant.wettbewerbskontext) {
            participant.wettbewerbskontext.forEach( context =>
            {
                if(!subcompParticipants[context]) {
                    subcompParticipants[context] = [];
                }
                subcompParticipants[context].push( participant );
            }
            );
        } 
    } );
    //console.log(subcompParticipants);

    let taskfields = [];
    data.aufgaben.forEach( aufgabe => { aufgabe.systematik.forEach( term => {if (taskfields.indexOf(term)===-1) taskfields.push( term )} ) } );

    return(
        <div style={ { marginTop: 40 } }>
        <Row>
            <Col span={20} offset={2}>
        <h2 style={{color: "grey", marginBottom: 0}}> { participants.map( participant => participant.rolle.indexOf("ausschreibende Institution/Person")>=0 ? participant.name : "" ) } </h2><h1> {data.bezeichnung[0]}</h1>
        <p>{data.anlass? "Anlass: " + data.anlass : ""}</p>
        {data.reduzierteErfassung && <p style={{color: "#f5222d"}} >Achtung: Aufgrund des Umfangs des Preisausschreibens wurden folgende Bereiche reduziert erfasst...</p>} 
        <div style={{marginTop: 50}}>
            <Row>
                <List 
                    header={<h3>Aufgaben</h3>}
                    dataSource={tasks}
                    size="small"
                    renderItem={ item =>
                        <List.Item>
                            <Col span={4} offset={1}>
                                {item.wettbewerbskontext}
                            </Col>
                            <Col span={4}>
                            {item.aufgabentyp}
                            </Col>
                            <Col span={15}>
                            {item.spezifizierung}
                            </Col>
                        </List.Item>
                    }
                />
                
                <Col></Col>
            </Row>
        </div>

        <div style={{marginTop: 50}}>
        <Row>
        <List 
            header={<div><h3>Ereignisse</h3> {comments? <Icon type="info-circle" /> : ""} </div>}
            size="small"
            bordered
            dataSource={events}
            renderItem={ item =>
                <List.Item>
                                      
                    <Col span={4}>
                        {item.zeit.datum ? new Date(item.zeit.datum).toLocaleDateString( 'de-DE', { day: "2-digit", month: '2-digit', year: "numeric"}) : "" +
                                    (item.zeit.von ? new Date(item.zeit.von).toLocaleDateString( 'de-DE', { day: "2-digit", month: '2-digit', year: "numeric"} ) : "") + 
                                    (item.zeit.bis ? " - " + new Date(item.zeit.bis).toLocaleDateString( 'de-DE', { day: "2-digit", month: '2-digit', year: "numeric"} ) : "")  
                        } { item.zeit.datumszusatz && <Popover
                            content={item.zeit.datumszusatz}
                        >
                            <Icon type="info-circle-o" />
                        </Popover>}
                    </Col>  
                    <Col span={20}>
                    {item.ereignistyp==="Sonstiges"? item.beschreibung : item.ereignistyp}, {item.ort? item.ort.ortsname : "Ort unbekannt"} {
                        item.ort.ortszusatz ? " (" + item.ort.ortszusatz +")" : ""                            
                        } { item.wettbewerbskontext? item.wettbewerbskontext.map( kontext => <Tag key={kontext} color="magenta">{kontext}</Tag> ) : ""}
                    </Col>
                </List.Item>
            }
        />
        </Row>
        </div>
        {subcompetitions &&
            <div style={{marginTop: 50}} >
                <Tabs defaultActiveKey="0">
                    {subcompetitions.map( (subcomp, index) => 
                        <TabPane tab={subcomp} key={index}>
                        {/*the following line checks if there are participants with the role "Jurymitglied"; in that case the display of jury info will be rendered */}
                        { subcompParticipants[subcomp] && subcompParticipants[subcomp].filter( participant => participant.rolle.indexOf( "Jurymitglied" )>=0 ).length>1
                             && <Row>
                            <List 
                                
                                header={<div><h3>Jury</h3></div>}
                                size="small"
                                dataSource={ subcompParticipants[subcomp].filter( participant => participant.rolle.indexOf( "Jurymitglied" ) >= 0 ) }
                                    //{participants.filter(participant => participant.rolle.indexOf( "Jurymitglied" ) >=0 && ( participant.wettbewerbskontext ? participant.wettbewerbskontext.indexOf(subcomp) >= 0 : true ) ) }
                                renderItem={ item =>
                                    <List.Item>
                                        <List.Item.Meta 
                                            title={item.name}
                                            description={item.anmerkung}
                                        />
                                        {/*
                                        <Col span={6} offset={1}>
                                            {item.name}
                                        </Col>
                                        <Col span={17}>
                                            { item.anmerkung ? item.anmerkung : "" }
                                        </Col>
                                        */}
                                    </List.Item>
                                }
                            />
                        </Row>}
                        <Row>
                            {awards.map( award =>
                                {
                                    if(award.wettbewerbskontext && award.wettbewerbskontext===subcomp) {
                                        return( 
                                            <List 
                                                key={subcomp}
                                                header={<div><h3>Auszeichnungen und Preisträger </h3><br /> {award.auszeichnungsarten? award.auszeichnungsarten.map( prize => <Tag key={prize}>{prize}</Tag> ) : "Verliehne Auszeichnungen sind nicht bekannt" }</div>}
                                                dataSource={award.platzierungen.sort( (a,b) => a.rang - b.rang )}
                                                renderItem={ item =>
                                                    <List.Item>
                                                        <Col span={3} offset={1}>
                                                            { item.rang==="n" ? "nachrangig" : ( item.rang==="ak" ? "außer Konkurrenz" : item.rang + ". Rang" ) }
                                                        </Col>
                                                        <Col span={12}>
                                                            {item.beschreibung}
                                                        </Col>
                                                        <Col span={8}>
                                                        <ul>
                                                            {item.platzierte.map( platzierter => <li key={platzierter}> {participants.map( participant => participant.identifier.indexOf(platzierter)===0? participant.name : "" )
                                                        } { data.teilnehmerleistungen && data.teilnehmerleistungen.map( leistung => leistung.teilnehmer.indexOf(platzierter) >= 0 ? " mit: " + leistung.beschreibung  : "" ) } </li>)}
                                                            {/*<Tag key={platzierter}>{participants.map( participant => participant.identifier.indexOf(platzierter)===0? participant.name : "" )}</Tag> )*/}
                                                        </ul>
                                                        </Col>
                                                    </List.Item>
                                                }
                                            />
                                        );
                                    }
                                }
                            )
                            }
                        </Row>
                        { subcompParticipants[subcomp] && <Row>
                            <List 
                                header={<div><h3>Weitere Teilnehmer in diesem Teilwettbewerb</h3></div>}
                                grid={ {column: 2} }
                                dataSource={ subcompParticipants[subcomp].filter( participant =>
                                    participant.rolle.indexOf( "TeilnehmerIn" ) >= 0 && rankedParticipants.indexOf( participant.identifier ) === -1
                                ) }
                                renderItem={ item =>
                                    <List.Item>
                                        <List.Item.Meta 
                                            title={item.name}
                                            description={item.anmerkung}
                                        />
                                        {/*<Col span={3} offset={1}>
                                            {item.name} 
                                        </Col>
                                        <Col span={6}>
                                            { item.anmerkung }
                                        </Col>
                                */}                   
                                    </List.Item>
                                }
                            />
                        </Row>}
{/* something wrong here */}                       
                        { data.teilnahmevoraussetzungen && data.teilnahmevoraussetzungen.filter( criterion => criterion.teilwettbewerb === subcomp).length > 0
                        && <Row>
                            <List 
                                header={<h3>Teilnahmevoraussetzungen</h3>}
                                dataSource={data.teilnahmevoraussetzungen.filter( criterion => criterion.teilwettbewerb === subcomp)}
                                renderItem={ item =>
                                    <List.Item>
                                        <Col span={3} offset={1} >
                                            {item.kriterium}
                                        </Col>
                                        <Col span={20}>
                                            {item.beschreibung}
                                        </Col>
                                    </List.Item>
                                }
                            />
                        </Row>}
                        </TabPane>
                    )}
                </Tabs>
            </div>
        }
        <div style={{marginTop: 50}} >
        <Collapse>
            { data.anlass &&  
                <Panel header={"Anlass für das Preisausschreiben"}>
                    <Row>
                        <Col span={20} offset={2}>
                            { data.anlass }
                        </Col>
                    </Row>
            </Panel> }
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
                    { subcompetitions.map( subcomp => <Tag color="magenta" key={subcomp} >{subcomp}</Tag> ) }
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
                                <div>{ item.systematik.map( term => <Tag key={term}> {term} </Tag> ) }</div>
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
            { data.teilnahmevoraussetzungen && <Panel header={"Teilnahmevoraussetzungen"}>
                <Row>
                    <Col span={20} offset={2}>
                        <List
                            itemLayout="vertical"
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
            </Panel>}
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
                    awards.map( (award, index) => <Panel key={index} header={ <span> {award.wettbewerbskontext? " Auszeichnungen im Teilwettbewerb " + award.wettbewerbskontext : "Auszeichnungen"}: {award.auszeichnungsarten? award.auszeichnungsarten.map( i => i + ", " ) : "Verliehne Auszeichnungen sind nicht bekannt" } </span>} >
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
            { data.teilnehmerleistungen && <Panel header={"Teilnehmerleistungen"} >
                    <List
                        size="small"
                        dataSource={data.teilnehmerleistungen}
                        renderItem={ item =>
                            <List.Item>
                                <List.Item.Meta 
                                    title={item.beschreibung}
                                />
                                {item.teilnehmer.map( teilnehmer => <Tag key={teilnehmer}>{participants.map( participant => participant.identifier.indexOf(teilnehmer)===0? participant.name : "" )}</Tag> )}
                            </List.Item>
                        }
                    />
            </Panel>}
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