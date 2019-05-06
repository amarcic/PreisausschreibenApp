import React from 'react';

import { Row, Col, List, Collapse, Divider } from 'antd';
import EventSegment from './EventSegment';
import withCommentContainer from './withCommentContainer';
import OverviewTaskSegment from './OverviewTaskSegment';
import CompetingSegment from './CompetingSegment';
import ParticipantSegment from './ParticipantSegment';

const Panel = Collapse.Panel;
const EventSegmentWithCommentContainer = withCommentContainer(EventSegment);
const OverviewTaskSegmentWithCommentContainer = withCommentContainer(OverviewTaskSegment);
const CompetingSegmentWithCommentContainer = withCommentContainer(CompetingSegment);
const ParticipantSegmentWithCommentContainer = withCommentContainer(ParticipantSegment);



export default function ContestPage( props ) {
    console.log( props.requestData );

    const data = props.requestData;
    // sort events by date; case that only value data.ereignisse.zeit.bis exists has been ignored (right now there are no such event objects in the data)
    const events = data.ereignisse.sort( (a,b) => new Date(a.zeit.datum? a.zeit.datum : a.zeit.von) - new Date(b.zeit.datum? b.zeit.datum : b.zeit.von) );
    const tasks = data.aufgaben;
    const keywords = data.schlagwoerter;
    const participants = data.beteiligte;
    const sources = data.quellen;
    const formalia = data.formalia;
    const occasion = data.anlass;
    const taskTypes = data.aufgaben.map( task => task.aufgabentyp );

    let awards = [];
    if(data.auszeichnungen) { awards = data.auszeichnungen;}
    let subcompetitions;
    if (data.wettbewerbsgliederung) { subcompetitions = data.wettbewerbsgliederung;}
    let comments = [];
    if (data.kommentare) { comments = data.kommentare };
    let rankedParticipants = [];
    let tender = [];
    let series;
    let numberOfParticipants;

    const duration = [ (events[0].zeit.datum ? events[0].zeit.datum : events[0].zeit.von), (events[events.length-1].zeit.datum ? events[events.length-1].zeit.datum : events[events.length-1].zeit.von)];
    const place = data.ereignisse.find( event => event.ort.hasOwnProperty("ortsname")) ? data.ereignisse.find( event => event.ort.hasOwnProperty("ortsname") ).ort.ortsname : "Ort unbekannt"  ;

    console.log( place );
    
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
    
    if (data.hasOwnProperty("teilnehmerleistungen")) {
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

    let taskfields = [];
    data.aufgaben.forEach( aufgabe => { aufgabe.systematik.forEach( term => {if (taskfields.indexOf(term)===-1) taskfields.push( term )} ) } );

    tender = participants.filter( participant => participant.rolle.indexOf("ausschreibende Institution/Person")>=0 );

    if (data.hasOwnProperty("teilnehmerInnenzahl")) {numberOfParticipants = data.teilnehmerInnenzahl;}

    if (data.hasOwnProperty("serienzuordnung")) {series=data.serienzuordnung}  

    return(
        <div style={ { marginTop: 50 } }>
        <Row>
            <Col span={20} offset={2}> 
        
        <div>
            <OverviewTaskSegmentWithCommentContainer occasion={occasion} duration={duration} place={place} tender={tender} series={series} pAmount={numberOfParticipants} taskTypes={taskTypes} tasks={tasks} subcompetitions={subcompetitions} conditions={data.teilnahmevoraussetzungen} formalia={formalia} comments={comments.filter( comment => comment.thema==="Preisausschreiben allgemein" || comment.thema==="Aufgaben" || comment.thema==="Formalia" || comment.thema==="ausschreibende Institution/Person" || comment.thema==="Teilnahmevoraussetzungen" )}  />       
        </div>

        <div style={{marginTop: 50}}>
            <Row>
                <EventSegmentWithCommentContainer events={events} comments={comments.filter( comment => comment.thema==="Ereignisse" )} />
            </Row>
            <Divider></Divider>
        </div>

        {data.reduzierteErfassung && <p style={{color: "#f5222d"}} >Den angeführten Quellen zu diesem Wettbewerb lassen sich möglicherweise weitere Informationen entnehmen, die in der Datenbank bisher nicht erfasst wurden. Dies gilt für alle Wettbewerbe mit der Teilnahme von Gruppen wie z.B. Ensembles, Chören oder Orchestern.</p>}
        
        <CompetingSegmentWithCommentContainer participants={participants} awards={awards} subcompetitions={subcompetitions} numOfParticipants={data.teilnehmerInnenzahl} comments={comments.filter( comment => comment.thema==="PreisträgerInnen" || comment.thema==="Jury" || comment.thema==="Beurteilung" || comment.thema==="Auszeichnungen" || comment.thema==="PreisträgerInnen" )} />

        <Divider style={{marginTop: 50}}></Divider>
        
        <ParticipantSegmentWithCommentContainer participants={participants} comments={comments.filter( comment => comment.thema==="TeilnehmerInnen")} />

        <div style={{marginTop: 50}} >
        <Collapse>
            <Panel header={ data.bezeichnung.length + " Bezeichnungen"}>
                    <Col offset={1}>
                        <ul>
                            {data.bezeichnung.map( label => <li key={label}>{label}</li> )}
                        </ul>
                    </Col>
            </Panel>
            <Panel header={ keywords.length + " Schlagworte"}>
                <Col offset={1}>
                    {keywords.concat(taskfields).sort().join(", ")}
                    {/*still lowercase is sorted after uppercase, but should not be*/}
                </Col>
            </Panel>
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