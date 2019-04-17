import React from 'react';
import { Row } from 'antd';

import AwardsList from './AwardsList';
import MemberListJury from './MemberListJury';
import ContestantList from './ContestantList';
import NumberOfParticipants from './NumberOfParticipants';


export default function CompetingDisplay( props ) {

    const juryMembers = props.participants.filter( participant => participant.rolle.indexOf("Jurymitglied")>=0 );
    const awards = props.awards;
    const awardedParticipants = props.participants.filter( participant => participant.hasOwnProperty('ranks') );
    const furtherContestants = props.participants.filter( participant => !participant.hasOwnProperty('ranks') && participant.rolle.indexOf("TeilnehmerIn")>-1 );
    const numOfParticipants = props.numOfParticipants;

    console.log("hello");
    console.log(props.participants);
    console.log(numOfParticipants);

    return(
        <div>
            { juryMembers.length>0 
                && <MemberListJury juryMembers={juryMembers} />
            }
            {
            <Row>
                <AwardsList awards={awards} awardedParticipants={awardedParticipants} />
            </Row>}
            {furtherContestants && furtherContestants.length>0 && <ContestantList contestants={furtherContestants} />}
            { 
                numOfParticipants && numOfParticipants.length>0 /*&& !numOfParticipants.filter( nop => nop.hasOwnProperty('wettbewerbskontext') ).length>0*/
                && <NumberOfParticipants numOPart={ numOfParticipants } />
            }
        </div>
    );

}