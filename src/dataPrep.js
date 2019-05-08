
export default function dataPrep( data ) {

    let preppedData = {}; 

    if (data.type==="preisausschreiben") {
        
        // sorting events earliest to latest
        preppedData[events] = data.ereignisse.sort( (a,b) => new Date(a.zeit.datum? a.zeit.datum : a.zeit.von) - new Date(b.zeit.datum? b.zeit.datum : b.zeit.von) );

        // array of types of tasks
        preppedData[taskTypes] = data.aufgaben.map( task => task.aufgabentyp );

        // gathering all data on a subset of participants, who have ranked in one of the subcompetitions
        preppedData[rankedParticipants] = [];
        if(data.auszeichnungen) {
            data.auszeichnungen.forEach( award => 
                {
                    if (award.platzierungen) {
                        award.platzierungen.forEach( rank => {
                            if( rank.platzierte ) {
                                rank.platzierte.forEach( ranked =>{
                                    let context = "0";
                                    award.wettbewerbskontext? context=award.wettbewerbskontext : context = "hauptwettbewerb"; 
                                    if (!rankedParticipants[ranked]) {rankedParticipants[ranked]={} };
                                    rankedParticipants[ranked][context] = rank.rang;
                                }
                                );
                            }
                        } );
                    }
                } 
            );
        }
        
        // duration of the contest, array of two dates: first element the earliest, second the latest date
        preppedData[duration] = [ (events[0].zeit.datum ? events[0].zeit.datum : events[0].zeit.von), (events[events.length-1].zeit.datum ? events[events.length-1].zeit.datum : events[events.length-1].zeit.von)];
        // primary location of the contest; defined as the location of the first event in the data (so it cannot be taken from the sorted events property)
        preppedData[location] = data.ereignisse[0].ort.ortsname ? data.ereignisse[0].ort.ortsname : data.ereignisse.find( event => event.hasOwnProperty(ortsname) ).ortsname;


    }
    
    return preppedData;
}   

const events = data.ereignisse.sort( (a,b) => new Date(a.zeit.datum? a.zeit.datum : a.zeit.von) - new Date(b.zeit.datum? b.zeit.datum : b.zeit.von) );
//console.log( events );
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
const place = [events[0].ort.ortsname];

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

tender = participants.filter( participant => participant.rolle.indexOf("ausschreibende Institution/Person")>=0 );

if (data.hasOwnProperty("teilnehmerInnenzahl")) {numberOfParticipants = data.teilnehmerInnenzahl;}

if (data.hasOwnProperty("serienzuordnung")) {series=data.serienzuordnung} 