import React from 'react';

import CompetingDisplay from './CompetingDisplay';
import SubcompetitionTabs from './SubcompetitionTabs';

export default function CompetingSegment( props ) {

    const awards = props.awards;
    const participants = props.participants;
    const numOfParticipants = props.numOfParticipants;
    const subcompetitions = props.subcompetitions || undefined;

    return(
        <div>
            { subcompetitions && <SubcompetitionTabs subcompetitions={subcompetitions}  participants={ participants.filter( participant => participant.wettbewerbskontext ) } awards={awards} numOfParticipants={numOfParticipants} /> }
            { !subcompetitions && 
                <div style={{marginTop: 50}}>
                    <CompetingDisplay participants={participants} numOfParticipants={numOfParticipants} awards={awards} />

                </div>
            }
        { //the extra MememberListJury component is here for the case the jury memebers are not in any subcompetition and thus would not be shown at all
        /*
            subcompetitions
            && participants.filter( participant => participant.rolle.indexOf( "Jurymitglied" )>=0 && !participant.hasOwnProperty('wettbewerbskontext') ).length>0 
            && <div style={{marginTop: 50}} ><Divider>Den Quellen konnte für folgende Einträge keine eindeutige Zuordnung zu Teilwettwerben entnommen werden</Divider>
        <MemberListJuryWithCommentContainer juryMembers={participants.filter( participant => participant.rolle.indexOf( "Jurymitglied" ) >= 0 && !participant.hasOwnProperty('wettbewerbskontext') )} comments={comments.filter( comment => comment.thema === "Jury" )} /></div>
        */}
        </div>
    );

}