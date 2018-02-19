import React from 'react';

import { Row, Col, Card, List, Tag, Collapse, Timeline, Tabs, Icon, Popover, Divider } from 'antd';
import { Link } from 'react-router-dom';
import SubcompetitionTabs from './SubcompetitionTabs';

const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;

export default function ContestPage( props ) {
    console.log( props.requestData );

    const data = props.requestData;
    // sort events by date; case that only value data.ereignisse.zeit.bis exists has been ignored (right now there are no such event objects in the data)
    const events = data.ereignisse.sort( (a,b) => new Date(a.zeit.datum? a.zeit.datum : a.zeit.von) - new Date(b.zeit.datum? b.zeit.datum : b.zeit.von) );
    //console.log( events );
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
    //console.log( rankedParticipants );

    let taskfields = [];
    data.aufgaben.forEach( aufgabe => { aufgabe.systematik.forEach( term => {if (taskfields.indexOf(term)===-1) taskfields.push( term )} ) } );

    return(
        <div style={ { marginTop: 40 } }>
        <Row>
            <Col span={20} offset={2}>
        <h2 style={{color: "grey", marginBottom: 0}}> { participants.map( participant => participant.rolle.indexOf("ausschreibende Institution/Person")>=0 ? participant.name + " " : "" ) } </h2><h1> {data.bezeichnung[0]}</h1>
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
                                      
                    <Col span={5}>
                        {item.zeit.datum ? new Date(item.zeit.datum).toLocaleDateString( 'de-DE', { day: "2-digit", month: '2-digit', year: "numeric"}) : "" +
                                    (item.zeit.von ? new Date(item.zeit.von).toLocaleDateString( 'de-DE', { day: "2-digit", month: '2-digit', year: "numeric"} ) : "") + 
                                    (item.zeit.bis ? " - " + new Date(item.zeit.bis).toLocaleDateString( 'de-DE', { day: "2-digit", month: '2-digit', year: "numeric"} ) : "")  
                        } { item.zeit.datumszusatz && <Popover
                            content={item.zeit.datumszusatz}
                        >
                            <Icon type="info-circle-o" />
                        </Popover>}
                    </Col>  
                    <Col span={19}>
                    {item.ereignistyp==="Sonstiges"? item.beschreibung : item.ereignistyp}, {item.ort? item.ort.ortsname : "Ort unbekannt"} {
                        item.ort.ortszusatz ? " (" + item.ort.ortszusatz +")" : ""                            
                        } { item.wettbewerbskontext? item.wettbewerbskontext.map( kontext => <Tag key={kontext} color="magenta">{kontext}</Tag> ) : ""}
                    </Col>
                </List.Item>
            }
        />
        </Row>
        <Divider></Divider>
        </div>
        { subcompetitions && <SubcompetitionTabs subcompetitions={subcompetitions}  participants={ participants.filter( participant => participant.wettbewerbskontext ) } ranked={rankedParticipants} awards={awards} teilnehmerleistungen={data.teilnehmerleistungen} teilnahmevoraussetzungen={data.teilnahmevoraussetzungen} teilnehmerInnenzahl={data.teilnehmerInnenzahl} /> }
        { !subcompetitions && 
            <div style={{marginTop: 50}}>
            { participants.filter( participant => participant.rolle.indexOf( "Jurymitglied" )>=0 ).length>1 
                && <Row>
                    <List 
                        grid={ participants.filter( participant => participant.rolle.indexOf( "Jurymitglied" ) >= 0 ).length > 4 ? {column: 2} : {column: 1} }
                        header={<div><h3>Jury</h3></div>}
                        size="small"
                        dataSource={ participants.filter( participant => participant.rolle.indexOf( "Jurymitglied" ) >= 0 ) }
                        renderItem={ item =>
                            <List.Item>
                                <List.Item.Meta 
                                    title={item.name}
                                    description={item.anmerkung}
                                />
                            </List.Item>
                        }
                    />
                </Row>
            }
            { awards 
               && <Row>
                    {awards.map( award =>
                        {
                            
                                return( 
                                    <List 
                                        key={award.auszeichnungsarten.toString() }
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
                                                    {/* sorry about the unreadable code below: explanation... */}
                                                    {item.platzierte.map( platzierter => <li key={platzierter}> { platzierter==="nv" ? "nicht vergeben" : (participants.map( participant => participant.identifier.indexOf(platzierter)===0? participant.name : "") )
                                                } { data.teilnehmerleistungen && data.teilnehmerleistungen.map( leistung => leistung.teilnehmer && leistung.teilnehmer.indexOf(platzierter) >= 0 ? " mit: " + leistung.beschreibung  : "" ) } </li>)}
                                                </ul>
                                                </Col>
                                            </List.Item>
                                        }
                                    />
                                );
                        
                        }
                    )
                }
                </Row>}
                {/* the way of adding the entry to the participant with map works... but I feel a bit uneasy, since map returns an array and I leave it up to the browser, how it generates the string from the array (same above)
                changed it so it does not leave array handling to react. now only the first element of the array is used. check back if this is enough ( replaced with [0]: .map( leistung => " mit: " + leistung.beschreibung ) ) */}
                <Row>
                    <List 
                        header={<div><h3>Weitere Teilnehmer</h3></div>}
                        grid={ {column: 2} }
                        dataSource={ participants.filter( participant =>
                            participant.rolle.indexOf( "TeilnehmerIn" ) >= 0 && rankedParticipants.indexOf( participant.identifier[0] ) === -1 )}
                        renderItem={ item =>
                            <List.Item>
                                <List.Item.Meta 
                                    title={item.name + ( data.teilnehmerleistungen && " mit: " + data.teilnehmerleistungen.filter( leistung => leistung.teilnehmer && leistung.teilnehmer.indexOf(item.identifier[0]) >= 0 )[0].beschreibung ) }
                                    description={item.anmerkung}
                                />        
                            </List.Item>
                        }
                    />
                </Row>
                { data.teilnahmevoraussetzungen
                        && <Row>
                            <List 
                                header={<h3>Teilnahmevoraussetzungen</h3>}
                                dataSource={data.teilnahmevoraussetzungen}
                                renderItem={ item =>
                                    <List.Item>
                                        <Col span={3} offset={1} >
                                            {item.kriterium.map( crit => <Tag key={crit}>{crit}</Tag> ) }
                                        </Col>
                                        <Col span={20}>
                                            {item.beschreibung}
                                        </Col>
                                    </List.Item>
                                }
                            />
                        </Row>}
                {
                    data.teilnehmerInnenzahl && !data.teilnehmerInnenzahl.wettbewerbskontext
                        && <Row>
                            <List 
                                header={ <h3>TeilnehmerInnenzahl</h3> }
                                dataSource={ data.teilnehmerInnenzahl }
                                renderItem={ item => 
                                    <List.Item>
                                        <Col span={2} offset={1}>
                                        {item.anzahl}
                                        </Col>
                                        <Col>
                                        {item.anmerkung}
                                        </Col>
                                    </List.Item>
                                }
                            />
                        </Row>
                }

            </div>
        }
        <Divider></Divider>
        <div style={{marginTop: 50}} >
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
            <Panel header={ data.bezeichnung.length + " Bezeichnungen"}>
                
                    {data.bezeichnung.map( label => <Tag key={label}>{label}</Tag> )}
                
            </Panel>
            <Panel header={ keywords.length + " Schlagworte"}>
                
                    {keywords.map( keyword => <Tag key={keyword}>{keyword}</Tag> )}
                
            </Panel>
            <Panel header={ taskfields.length + " Aufgabenbereiche"}>
                
                    { taskfields.map( taskfield => <Tag key={taskfield} >{taskfield}</Tag> ) }
                
            </Panel>
            { data.formalia && <Panel header={"Formalia"} >
                    <Row>
                        <Col span={20} offset={2}>
                            {data.formalia}
                        </Col>
                    </Row>
            </Panel>}
            { data.ergaenzungen && <Panel header={"Ergänzungen"} >
                    <Row>
                        <Col span={20} offset={2}>
                            {data.ergaenzungen}
                        </Col>
                    </Row>
            </Panel>}
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