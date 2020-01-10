import React from 'react';

import { Row, Col, Divider, Alert } from 'antd';
import EventSegment from './EventSegment';
import withCommentContainer from './withCommentContainer';
import OverviewTaskSegment from './OverviewTaskSegment';
import CompetingSegment from './CompetingSegment';
import ParticipantSegment from './ParticipantSegment';
import LabelSegment from './LabelSegment';
import ResourceSegment from './ResourceSegment';
import dateHelper from './dateHelper';

const EventSegmentWithCommentContainer = withCommentContainer(EventSegment);
const OverviewTaskSegmentWithCommentContainer = withCommentContainer(OverviewTaskSegment);
const CompetingSegmentWithCommentContainer = withCommentContainer(CompetingSegment);
const ParticipantSegmentWithCommentContainer = withCommentContainer(ParticipantSegment);



export default function ContestPage( props ) {
    //console.log( props.requestData );

    const data = props.requestData;
    // sort events by date; case that only value data.ereignisse.zeit.bis exists has been ignored (right now there are no such event objects in the data)
    const events = data.ereignisse.sort( (a,b) => new Date(a.zeit.datum? dateHelper(a.zeit.datum, "01", "-", "std") : dateHelper(a.zeit.von, "01", "-", "std")) - new Date(b.zeit.datum? dateHelper(b.zeit.datum, "01", "-", "std") : dateHelper(b.zeit.von, "01", "-", "std")) );
    const tasks = data.aufgaben;
    const keywords = data.schlagwoerter;
    const participants = data.beteiligte;
    const resources = data.quellen;
    const formalia = data.formalia;
    const occasion = data.anlass;
    const taskTypes = data.aufgaben.map( task => task.aufgabentyp );

    let awards = [];
    if(data.auszeichnungen) { awards = data.auszeichnungen;}
    let subcompetitions;
    if (data.wettbewerbsgliederung) { subcompetitions = data.wettbewerbsgliederung;}
    let comments = [];
    if (data.kommentare) { comments = data.kommentare };
    if (data.ergaenzungen) { comments.push( { text: data.ergaenzungen, thema: "Ergaenzungen" } ) }
    let rankedParticipants = [];
    let tender = [];
    let series;
    let numberOfParticipants;

    //console.log(events)

    const duration = [ (events[0].zeit.datum ? events[0].zeit.datum : events[0].zeit.von), (events[events.length-1].zeit.datum ? events[events.length-1].zeit.datum : events[events.length-1].zeit.von)];
    const place = data.ereignisse.find( event => event.ort.hasOwnProperty("ortsname")) ? data.ereignisse.find( event => event.ort.hasOwnProperty("ortsname") ).ort.ortsname : "Ort unbekannt"  ;
    
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
                                                                    //should check for the case that identifiers are not found among participants
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
                <OverviewTaskSegmentWithCommentContainer occasion={occasion} duration={duration} place={place} tender={tender} series={series} pAmount={numberOfParticipants} taskTypes={taskTypes} tasks={tasks} subcompetitions={subcompetitions} conditions={data.teilnahmevoraussetzungen} formalia={formalia} comments={comments.filter( comment => comment.thema==="Preisausschreiben allgemein" || comment.thema==="Aufgaben" || comment.thema==="Formalia" || comment.thema==="ausschreibende Institution/Person" || comment.thema==="Teilnahmevoraussetzungen" || comment.thema==="Ergaenzungen" )}  />
            </div>

            <div style={{marginTop: 50}}>
                    <EventSegmentWithCommentContainer events={events} comments={comments.filter( comment => comment.thema==="Ereignisse" )} />
            </div>

            {data.reduzierteErfassung && <Alert message="Den angeführten Quellen zu diesem Wettbewerb lassen sich möglicherweise weitere Informationen entnehmen, die in der Datenbank bisher nicht erfasst wurden. Dies gilt für alle Wettbewerbe mit der Teilnahme von Gruppen wie z.B. Ensembles, Chören oder Orchestern." type="info" showIcon />}


            <div style={{marginTop: 50}}>
                <CompetingSegmentWithCommentContainer participants={participants} awards={awards} subcompetitions={subcompetitions} numOfParticipants={data.teilnehmerInnenzahl} comments={comments.filter( comment => comment.thema==="PreisträgerInnen" || comment.thema==="Jury" || comment.thema==="Beurteilung" || comment.thema==="Auszeichnungen" || comment.thema==="PreisträgerInnen" || comment.thema==="TeilnehmerInnen" )} />
            </div>

            <div style={{marginTop: 50}}>
                <ParticipantSegmentWithCommentContainer participants={participants} comments={comments.filter( comment => comment.thema==="TeilnehmerInnen")} />
            </div>

            <div style={{marginTop: 50}} >
                <LabelSegment tags={keywords.concat(taskfields)} labels={data.bezeichnung} />
            </div>

            <div style={{marginTop: 50}}>
                <ResourceSegment resources={resources} />
            </div>
            <p style={{marginTop:"20px"}}><a href={"http://musical-competitions.uni-koeln.de/api/" + data._id}>Datensatz zu diesem Preisausschreiben</a> (JSON)</p>
        </Col>
    </Row>
    </div>
    );
}