import React from 'react';

import { Row, Col, List, Collapse, Divider, Table } from 'antd';
import { Link } from 'react-router-dom';
import SubcompetitionTabs from './SubcompetitionTabs';
import MemberListJury from './MemberListJury';
import AwardsList from './AwardsList';
import ContestantList from './ContestantList';
import NumberOfParticipants from './NumberOfParticipants';
import Prerequisits from './Prerequisits';
import EventsList from './EventsList';
import withCommentContainer from './withCommentContainer';

const Panel = Collapse.Panel;
const EventsListWithCommentContainer = withCommentContainer(EventsList);
const MemberListJuryWithCommentContainer = withCommentContainer(MemberListJury);
const AwardsListWithCommentContainer = withCommentContainer(AwardsList);
const ContestantListWithCommentContainer = withCommentContainer(ContestantList);
const PrerequisitsWithCommentContainer = withCommentContainer(Prerequisits);
//const TabPane = Tabs.TabPane;

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
    let comments = [];
    if (data.kommentare) { comments = data.kommentare };
    let rankedParticipants = [];

    //let activeSubTab = subcompetitions? subcompetitions[0] : "";

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
                            //rankedParticipants[ranked] = { [context]: rank.rang }
                            if (!rankedParticipants[ranked]) {rankedParticipants[ranked]={} };
                            rankedParticipants[ranked][context] = rank.rang;
                        }
                            //rankedParticipants.push( { rankedId: ranked, rankInContext: { [award.wettbewerbskontext]: rank.rang }  /*[award.wettbewerbskontext]: rank.rang*/ /*rank: rank.rang, context: award.wettbewerbskontext*/ } )
                        );
                    }
                } );
            }
        } 
    );

    //the following line adds the data from rankedParticipants to the participants object.
    //using .find() causes a problem, if the same person ranked in different subcompetitions
    Object.keys( rankedParticipants ).forEach( id => { //console.log(id);
                                                        if( participants.find( participant => participant.identifier[0]===id ) ) { participants.forEach( participant => { if (participant.identifier[0] === id) { if(!participant.ranks) {participant.ranks={}};  for (let key in rankedParticipants[id]) ( participant.ranks[key]=rankedParticipants[id][key] ) } } ) }
                                                    } );
    //                                                console.log(rankedParticipants);
    //Object.keys(rankedParticipants).forEach( id => { participants.find( participant => participant.identifier[0]===id ) ? participants.find( participant => participant.identifier[0]===id ).ranks  = rankedParticipants[id] : console.log("done here"); } )
    //the following code looks for the participants identified in teilnehmerleistung.teilnehmer; then it adds a property 'leistung' to participants to hold the info from teilnehmerleistung in an array
    
    
    // I added a check for array and property 'teilnehmer' on data.teilnehmerleistungen
    // I have no idea what this is doing... but it is doing something
    
    if (data.teilnehmerleistungen) {
            data.teilnehmerleistungen.forEach( leistung =>     { if (leistung.hasOwnProperty('teilnehmer')&&Array.isArray(leistung.teilnehmer))
                                                                    { leistung.teilnehmer.forEach( participantId => {
                                                                    let attendee = participants.find( participant => participant.identifier[0] === participantId );
                                                                    /*if ( attendee ) {
                                                                        attendee.leistungen? attendee.leistungen.push(leistung.beschreibung) : attendee.leistungen = [leistung.beschreibung];
                                                                        return attendee;
                                                                    }
                                                                    else return "nicht gefunden";*/
                                                                    attendee.leistungen? attendee.leistungen.push(leistung.beschreibung) : attendee.leistungen = [leistung.beschreibung];
                                                                    return attendee;
                                                                    } 
                                                            )}} )
        }
    
    //the whole preparation of participant data should maybe be outsourced to an extra function
    /*
    let participantsBySubcomp = {};
    participants.forEach( participant => {
                                            if ( participant.wettbewerbskontext ) {
                                                participant.wettbewerbskontext.forEach( context => participantsBySubcomp[context]? participantsBySubcomp[context].push(participant) : participantsBySubcomp[context] = [ participant ] )
                                            }  
                                        } 
                                    )
    */
    //console.log( "länge: "  + participants.filter( participant => participant.rolle.indexOf( "Jurymitglied" )>=0 && !participant.hasOwnProperty('wettbewerbskontext') ).length);
    //console.log(participants);
    //console.log(participantsBySubcomp);
    //console.log( rankedParticipants );
    //console.log(participants.filter( participant => participant.hasOwnProperty('ranks') ) );

    let taskfields = [];
    data.aufgaben.forEach( aufgabe => { aufgabe.systematik.forEach( term => {if (taskfields.indexOf(term)===-1) taskfields.push( term )} ) } );

    return(
        <div style={ { marginTop: 50 } }>
        <Row>
            <Col span={20} offset={2}>
        <h2 style={{color: "grey", marginBottom: 0}}>{ participants.filter( participant => participant.rolle.indexOf("ausschreibende Institution/Person")>=0 ).map( participant => participant.name ).join(", ") }</h2>
        <p>{data.anlass? "Anlass: " + data.anlass : ""}</p>
        {data.reduzierteErfassung && <p style={{color: "#f5222d"}} >Den angeführten Quellen zu diesem Wettbewerb lassen sich möglicherweise weitere Informationen entnehmen, die in der Datenbank bisher nicht erfasst wurden. Dies gilt für alle Wettbewerbe mit der Teilnahme von Gruppen wie z.B. Ensembles, Chören oder Orchestern.</p>} 

        <div style={{marginTop: 50}}>
        <Row>
            <Table 
                columns={columnsTasks} 
                dataSource={tasks} 
                pagination={false}
                rowKey={ record => record.wettbewerbskontext }
                onRow = { record => {return{
                    onClick: ()=>{/*activeSubTab=record.wettbewerbskontext;*/}
                }; } }
                />
        </Row>
        </div>

        <div style={{marginTop: 50}} >
        <Collapse>
            { data.formalia && <Panel header={"Formalia"} >
                    <Row>
                        <Col span={20} offset={1}>
                            {data.formalia}
                        </Col>
                    </Row>
            </Panel>}
        </Collapse>
        </div>

        <div style={{marginTop: 50}}>
        {/*<Row>
            <EventsList events={events} comments={comments.filter( comment => comment.thema==="Ereignisse" ) } />
        </Row>*/}
        <Row>
            <EventsListWithCommentContainer events={events} comments={comments.filter( comment => comment.thema==="Ereignisse" )} />
        </Row>
        <Divider></Divider>
        </div>
        { subcompetitions && <SubcompetitionTabs subcompetitions={subcompetitions}  participants={ participants.filter( participant => participant.wettbewerbskontext ) } awards={awards} teilnehmerleistungen={data.teilnehmerleistungen} teilnahmevoraussetzungen={data.teilnahmevoraussetzungen} teilnehmerInnenzahl={data.teilnehmerInnenzahl} comments={comments} /> }
        { !subcompetitions && 
            <div style={{marginTop: 50}}>
            { participants.filter( participant => participant.rolle.indexOf( "Jurymitglied" )>=0 ).length>0 
                && <MemberListJuryWithCommentContainer juryMembers={participants.filter( participant => participant.rolle.indexOf( "Jurymitglied" ) >= 0 )} comments={comments.filter( comment => comment.thema === "Jury" || comment.thema === "Beurteilung" )} />
            }
            { //awards && participants.filter( participant => participant.hasOwnProperty('ranks') ).length > 0 &&
                <Row><AwardsListWithCommentContainer awards={awards} awardedParticipants={participants.filter( participant => participant.hasOwnProperty('ranks') )} comments={comments.filter( comment => comment.thema === "PreisträgerInnen" || comment.thema === "Auszeichnungen" )} />
            </Row>}
                <ContestantListWithCommentContainer contestants={participants.filter( participant => !participant.hasOwnProperty('ranks') && participant.rolle.indexOf("TeilnehmerIn")>-1 )} comments={comments.filter( comment => comment.thema === "TeilnehmerInnen" )} />
                { data.teilnahmevoraussetzungen
                    && <PrerequisitsWithCommentContainer prereqs={data.teilnahmevoraussetzungen} comments={comments.filter( comment => comment.thema === "Teilnahmevoraussetzungen" )} /> 
                }
                { data.teilnehmerInnenzahl && !data.teilnehmerInnenzahl.filter( nop => nop.hasOwnProperty('wettbewerbskontext') ).length>0
                    && <NumberOfParticipants numOPart={ data.teilnehmerInnenzahl } />
                }
            </div>
        }
        { //the extra MememberListJury component is here for the case the jury memebers are not in any subcompetition and thus would not be shown at all
            subcompetitions
            && participants.filter( participant => participant.rolle.indexOf( "Jurymitglied" )>=0 && !participant.hasOwnProperty('wettbewerbskontext') ).length>0 
            && <div style={{marginTop: 50}} ><Divider>Den Quellen konnte für folgende Einträge keine eindeutige Zuordnung zu Teilwettwerben entnommen werden</Divider>
        <MemberListJuryWithCommentContainer juryMembers={participants.filter( participant => participant.rolle.indexOf( "Jurymitglied" ) >= 0 && !participant.hasOwnProperty('wettbewerbskontext') )} comments={comments.filter( comment => comment.thema === "Jury" )} /></div>
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
                                                "Teilwettbewerb: " + item.wettbewerbskontext.join(", ") : ""} >
                            <List.Item.Meta 
                                title={<span><Link to={"/dokumente/" + item.identifier[0]} > {item.name} </Link> als {item.rolle.join(", ") } </span> }
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