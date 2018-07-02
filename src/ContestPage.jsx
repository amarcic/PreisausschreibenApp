import React from 'react';

import { Row, Col, Card, List, Tag, Collapse, Timeline, Tabs, Icon, Popover, Divider, Table } from 'antd';
import { Link } from 'react-router-dom';
import SubcompetitionTabs from './SubcompetitionTabs';
import MemberListJury from './MemberListJury';
import AwardsList from './AwardsList';
import ContestantList from './ContestantList';
import Prerequisits from './Prerequisits';

import dateHelper from './dateHelper';

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
    let awards = [];
    if(data.auszeichnungen) { awards = data.auszeichnungen;}
    let subcompetitions;
    if (data.wettbewerbsgliederung) { subcompetitions = data.wettbewerbsgliederung;}
    let comments;
    if (data.kommentare) { comments = data.kommentare }
    let rankedParticipants = [];

    const columnsTasks = [{
        title: "Teilwettbewerb",
        dataIndex: "wettbewerbskontext"
    },
    {
        title: "Aufgabe",
        dataIndex: "spezifizierung"
    },
    {
        title: "Aufgabentyp",
        dataIndex: "aufgabentyp"
    }
    ]
    
    awards.forEach( award => 
        {
            if (award.platzierungen) {
                award.platzierungen.forEach( rank => {
                    if( rank.platzierte ) {
                        rank.platzierte.forEach( ranked =>{
                            let context = "0";
                            award.wettbewerbskontext? context=award.wettbewerbskontext : context = "hauptwettbewerb"; 
                            rankedParticipants[ranked] = { [context]: rank.rang }
                        }
                            //rankedParticipants.push( { rankedId: ranked, rankInContext: { [award.wettbewerbskontext]: rank.rang }  /*[award.wettbewerbskontext]: rank.rang*/ /*rank: rank.rang, context: award.wettbewerbskontext*/ } )
                        );
                    }
                } );
            }
        } 
    );

    //the following line adds the data from rankedParticipants to the participants object.
    Object.keys(rankedParticipants).forEach( id => { participants.find( participant => participant.identifier[0]===id ) ? participants.find( participant => participant.identifier[0]===id ).ranks  = rankedParticipants[id] : console.log("done here"); } )
    //the following code looks for the participants identified in teilnehmerleistung.teilnehmer; then it adds a property 'leistung' to participants to hold the info from teilnehmerleistung in an array
    
    if (data.teilnehmerleistungen) {
            data.teilnehmerleistungen.forEach( leistung => leistung.teilnehmer.forEach( participantId => {
                                                                let attendee = participants.find( participant => participant.identifier[0] === participantId );
                                                                attendee.leistungen? attendee.leistungen.push(leistung.beschreibung) : attendee.leistungen = [leistung.beschreibung];
                                                                return attendee;
                                                                } 
                                                            ) )
        }
    
    //the whole preparation of participant data should maybe be outsourced to an extra function

    let participantsBySubcomp = {};
    participants.forEach( participant => {
                                            if ( participant.wettbewerbskontext ) {
                                                participant.wettbewerbskontext.forEach( context => participantsBySubcomp[context]? participantsBySubcomp[context].push(participant) : participantsBySubcomp[context] = [ participant ] )
                                            }  
                                        } 
                                    )
    
    console.log( "länge: "  + participants.filter( participant => participant.rolle.indexOf( "Jurymitglied" )>=0 && !participant.hasOwnProperty('wettbewerbskontext') ).length);
    //console.log(participants);
    //console.log(participantsBySubcomp);
    //console.log( rankedParticipants );
    console.log(participants.filter( participant => participant.hasOwnProperty('ranks') ) );
    //console.log(data.teilnehmerleistungen);
    /*
    let teilnehmerMitLeistung =[];
    data.teilnehmerleistungen.forEach( leistung =>
        teilnehmerMitLeistung[ participants.find( participant => participant.identifier ).identifier ]
    );
    console.log( "Leistungen: " + teilnehmerMitLeistung );

    */
    let taskfields = [];
    data.aufgaben.forEach( aufgabe => { aufgabe.systematik.forEach( term => {if (taskfields.indexOf(term)===-1) taskfields.push( term )} ) } );

    return(
        <div style={ { marginTop: 50 } }>
        <Row>
            <Col span={20} offset={2}>
        <h2 style={{color: "grey", marginBottom: 0}}>{ participants.filter( participant => participant.rolle.indexOf("ausschreibende Institution/Person")>=0 ).map( participant => participant.name ).join(", ") }</h2>
        <p>{data.anlass? "Anlass: " + data.anlass : ""}</p>
        {data.reduzierteErfassung && <p style={{color: "#f5222d"}} >Achtung: Aufgrund des Umfangs des Preisausschreibens wurden folgende Bereiche reduziert erfasst...</p>} 

        <div style={{marginTop: 50}}>
        <Row>
            <Table 
                columns={columnsTasks} 
                dataSource={tasks} 
                pagination={false}
                />
        </Row>
        </div>

        <div style={{marginTop: 50}}>
        <Row>
        <List 
            //hack: only the text of the first found comment is displayed; if serveral comments on a topic are possible, this hack will fail
            //multiple comments on the same topic: c1ee5c0e921aac7ca1b0310b0809c292
            header={<div><h3>Ereignisse</h3> {comments && comments.filter(comment=>comment.thema==="Ereignisse").length>0? <Popover content={comments.filter( comment => comment.thema==="Ereignisse")[0].text}> <Icon type="info-circle" /> </Popover>: ""} </div>}
            size="small"
            
            dataSource={events}
            renderItem={ item =>
                <List.Item>
                                      
                    <Col span={5} offset={1}>
                        {item.zeit.datum ? dateHelper(item.zeit.datum)/*new Date(item.zeit.datum).toLocaleDateString( 'de-DE', { day: "2-digit", month: '2-digit', year: "numeric"})*/ : "" +
                                    (item.zeit.von ?  dateHelper(item.zeit.von) /*new Date(item.zeit.von).toLocaleDateString( 'de-DE', { day: "2-digit", month: '2-digit', year: "numeric"} )*/ : "") + 
                                    (item.zeit.bis ? " - " + dateHelper(item.zeit.bis) /*new Date(item.zeit.bis).toLocaleDateString( 'de-DE', { day: "2-digit", month: '2-digit', year: "numeric"} )*/ : "")  
                        } { item.zeit.datumszusatz && <Popover
                            content={item.zeit.datumszusatz}
                        >
                            <Icon type="info-circle-o" />
                        </Popover>}
                    </Col>  
                    <Col span={18}>
                    {item.ereignistyp==="Sonstiges"? item.beschreibung : item.ereignistyp}, {item.ort? item.ort.ortsname : "Ort unbekannt"} {
                        item.ort.ortszusatz ? " (" + item.ort.ortszusatz +")" : ""                            
                        } { item.wettbewerbskontext?"- betrifft Teilwettbewerbe: " + item.wettbewerbskontext.join(", ") : ""}
                        {/*.map( kontext => <Tag key={kontext} color="magenta">{kontext}</Tag> ) : ""*/}
                    </Col>
                </List.Item>
            }
        />
        </Row>
        <Divider></Divider>
        </div>
        { subcompetitions && <SubcompetitionTabs subcompetitions={subcompetitions}  participants={ participants.filter( participant => participant.wettbewerbskontext ) } awards={awards} teilnehmerleistungen={data.teilnehmerleistungen} teilnahmevoraussetzungen={data.teilnahmevoraussetzungen} teilnehmerInnenzahl={data.teilnehmerInnenzahl} /> }
        { !subcompetitions && 
            <div style={{marginTop: 50}}>
            { participants.filter( participant => participant.rolle.indexOf( "Jurymitglied" )>=0 ).length>0 
                && <MemberListJury juryMembers={participants.filter( participant => participant.rolle.indexOf( "Jurymitglied" ) >= 0 )} />
                /*<Row>     
                    <List 
                        //grid={ participants.filter( participant => participant.rolle.indexOf( "Jurymitglied" ) >= 0 ).length > 4 ? {column: 2} : {column: 1} }
                        grid={{column:2}}
                        header={<div><h3>Jury</h3></div>}
                        size="small"
                        dataSource={ participants.filter( participant => participant.rolle.indexOf( "Jurymitglied" ) >= 0 ) }
                        renderItem={ item =>
                            <List.Item>
                                <Col offset={2}>
                                    <List.Item.Meta 
                                        title={item.name}
                                        description={item.anmerkung}
                                    />
                                </Col>
                            </List.Item>
                        }
                    />
                </Row>*/
            }
            { //awards && participants.filter( participant => participant.hasOwnProperty('ranks') ).length > 0 &&
                <Row><AwardsList awards={awards} awardedParticipants={ participants.filter( participant => participant.hasOwnProperty('ranks') ) } />
                    {/*awards.map( award =>
                        {
                            
                                return( 
                                    <List 
                                        key={award.auszeichnungsarten.toString() }
                                        header={<div><h3>Auszeichnungen und PreisträgerInnen </h3><br /> {award.auszeichnungsarten? "Auszeichnungsarten: " + award.auszeichnungsarten.join(", ") : "Verliehne Auszeichnungen sind nicht bekannt" }</div>}
                                        dataSource={award.platzierungen.sort( (a,b) => a.rang - b.rang )}
                                        renderItem={ item =>
                                            <List.Item>
                                                <Col span={5} offset={1}>
                                                    { item.rang==="n" ? "nachrangig" : ( item.rang==="ak" ? "außer Konkurrenz" : item.rang + ". Rang" ) }
                                                </Col>
                                                <Col span={10}>
                                                    {item.beschreibung}
                                                </Col>
                                                <Col span={8}>
                                                <ul>                                                    
                                                    {item.platzierte.map( platzierter => <li key={platzierter}> { platzierter==="nv" ? "nicht vergeben" : participants.find( participant => participant.identifier.indexOf(platzierter)===0).name 
                                                }{ data.teilnehmerleistungen && data.teilnehmerleistungen.map( leistung => leistung.teilnehmer && leistung.teilnehmer.indexOf(platzierter) >= 0 ? ", mit: " + leistung.beschreibung  : "" ) } </li>)}
                                                </ul>
                                                </Col>
                                            </List.Item>
                                        }    />
                                
                                );
                        
                            }
                    )
                */}
            </Row>}
                {/* the way of adding the entry to the participant with map works... but I feel a bit uneasy, since map returns an array and I leave it up to the browser, how it generates the string from the array (same above)
                changed it so it does not leave array handling to react. now only the first element of the array is used. check back if this is enough ( replaced with [0]: .map( leistung => " mit: " + leistung.beschreibung ) ) */}
                <ContestantList contestants={participants.filter( participant => !participant.hasOwnProperty('ranks') )} />
                {/*
                <Row>
                    <List 
                        header={<div><h3>Weitere TeilnehmerInnen</h3></div>}
                        grid={ {column: 2} }
                        dataSource={ participants.filter( participant =>
                            participant.rolle.indexOf( "TeilnehmerIn" ) >= 0 && rankedParticipants.indexOf( participant.identifier[0] ) === -1 )}
                        renderItem={ item =>
                            <Col offset={1}>
                                <List.Item>
                                    <List.Item.Meta 
                                        title={ item.name + ( data.teilnehmerleistungen ? data.teilnehmerleistungen.map( leistung => leistung.teilnehmer && leistung.teilnehmer.indexOf(item.identifier[0])>0 ? ", mit: " + leistung.beschreibung : "") : "" ) }
                                            // there is still a bug in here showing unnecessary comma in some cases
                                            // this works ( data.teilnehmerleistungen && data.teilnehmerleistungen.find( leistung => leistung.teilnehmer && leistung.teilnehmer.indexOf( item.identifier[0] )>=0 ) ) ? item.name + " mit: " + data.teilnehmerleistungen.find( leistung => leistung.teilnehmer && leistung.teilnehmer.indexOf( item.identifier[0] )>=0 ).beschreibung : item.name }
                                            // this does not work correctly: " mit: " + data.teilnehmerleistungen.filter( leistung => leistung.teilnehmer && leistung.teilnehmer.indexOf(item.identifier[0]) >= 0 )[0].beschreibung : "" ) }
                                        description={item.anmerkung}
                                    />        
                                </List.Item>
                            </Col>
                        }
                    />
                </Row>*/}
                { data.teilnahmevoraussetzungen
                        && <Row>
                            <List 
                                header={<h3>Teilnahmevoraussetzungen</h3>}
                                dataSource={data.teilnahmevoraussetzungen}
                                renderItem={ item =>
                                    <List.Item>
                                        <Col span={5} offset={1} >
                                            {item.kriterium.join(", ") }
                                        </Col>
                                        <Col span={18}>
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
                                        <Col span={5} offset={1}>
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
        { //the extra MememberListJury component is here for the case the jury memebers are not in any subcompetition and thus would not be shown at all
            subcompetitions
            && participants.filter( participant => participant.rolle.indexOf( "Jurymitglied" )>=0 && !participant.hasOwnProperty('wettbewerbskontext') ).length>0 
            && <div style={{marginTop: 50}} ><Divider>den Quellen konnte für folgende Einträge keine eindeutige Zuordnung zu Teilwettwerben entnommen werden</Divider>
        <MemberListJury juryMembers={participants.filter( participant => participant.rolle.indexOf( "Jurymitglied" ) >= 0 && !participant.hasOwnProperty('wettbewerbskontext') )} /></div>
        }
        { /*the extra Prerequisits component is here for the case prerequisits are not in any subcompetition and thus would not be shown at all
            data.teilnahmevoraussetzungen 
            && subcompetitions && data.teilnahmevoraussetzungen.filter( prereq => !prereq.hasOwnProperty( 'wettbewerbskontext' ) ) > 0
            && <div style={{marginTop: 50}} ><Divider>den Quellen konnte für folgende Einträge keine eindeutige Zuordnung zu Teilwettwerben entnommen werden</Divider>
                    <Prerequisits prereqs={data.teilnahmevoraussetzungen.filter( prereq => !prereq.hasOwnProperty( 'wettbewerbskontext' ) ) } /></div> 
        */}
        <Divider></Divider>
        <div style={{marginTop: 50}} >
        <Collapse>
            <Panel header={ participants.length + " Beteiligte"}>
                <List
                    grid={ {column: 2} }
                    itemLayout="horizontal"
                    dataSource={participants}
                    renderItem={ item => (
                        <Col offset={1}>
                        <List.Item extra={ item.wettbewerbskontext? 
                                                "Teilwettbewerb: " + item.wettbewerbskontext.join(", ") :
                                                /*item.wettbewerbskontext.map( kontext => <Tag key={kontext} color="magenta">{kontext}</Tag> ) :*/
                                                ""} >
                            <List.Item.Meta 
                                title={<span><Link to={"/dokumente/person/" + item.identifier[0]} > {item.name} </Link> als {item.rolle.join(", ") } </span> }
                                description={item.anmerkung}
                            />
                        </List.Item>
                        </Col>
                    )

                    }
                />
            </Panel>
            <Panel header={ data.bezeichnung.length + " Bezeichnungen"}>
                    {/*data.bezeichnung.join(", ")*/}
                    {/*data.bezeichnung.map( label => <Tag key={label}>{label}</Tag> )*/}
                    <Col offset={1}>
                        <ul>
                            {data.bezeichnung.map( label => <li key={label}>{label}</li> )}
                        </ul>
                    </Col>
            </Panel>
            <Panel header={ keywords.length + " Schlagworte"}>
                <Col offset={1}>
                    {keywords.join(", ")}
                    {/*keywords.map( keyword => <Tag key={keyword}>{keyword}</Tag> )*/}
                </Col>
            </Panel>
            <Panel header={ taskfields.length + " Aufgabenbereiche"}>
                <Col offset={1}>
                    { taskfields.join(", ") }
                    {/* taskfields.map( taskfield => <Tag key={taskfield} >{taskfield}</Tag> ) */}
                </Col>
            </Panel>
            { data.formalia && <Panel header={"Formalia"} >
                    <Row>
                        <Col span={20} offset={1}>
                            {data.formalia}
                        </Col>
                    </Row>
            </Panel>}
            { data.ergaenzungen && <Panel header={"Ergänzungen"} >
                    <Row>
                        <Col span={20} offset={1}>
                            {data.ergaenzungen}
                        </Col>
                    </Row>
            </Panel>}
            { comments && <Panel header={ comments.length + " Kommentar/e" } >
                <Row>
                    <Col span={20} offset={1}>
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
                        <Col offset={1}>
                        <List.Item>
                            <List.Item.Meta 
                            title={item.quellenangabe}
                            description={ item.korpus===true? "Die Quelle gehört zum Korpus.": "Die Quelle gehört nicht zum Kropus." }
                            />
                        </List.Item>
                        </Col>
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