import React from 'react';
import { Tabs } from 'antd';

import MemberListJury from './MemberListJury';
import AwardsList from './AwardsList';
import ContestantList from './ContestantList';
import Prerequisits from './Prerequisits';
import NumberOfParticipants from './NumberOfParticipants';
import withCommentContainer from './withCommentContainer';
import CompetingDisplay from './CompetingDisplay';

const TabPane = Tabs.TabPane;

const MemberListJuryWithCommentContainer = withCommentContainer(MemberListJury);
const AwardsListWithCommentContainer = withCommentContainer(AwardsList);
const ContestantListWithCommentContainer = withCommentContainer(ContestantList);


export default function SubcompetitionTabs( props ) {

    const participants = props.participants;
    const subcompetitions = props.subcompetitions;
    //const rankedParticipants = props.ranked;
    const awards = props.awards || [];
    //const teilnahmevoraussetzungen = props.teilnahmevoraussetzungen;
    //const teilnehmerleistungen = props.teilnehmerleistungen;
    const teilnehmerInnenzahl = props.teilnehmerInnenzahl;
    const numOfParticipants = props.numOfParticipants || [];
    const awardedParticipants = participants.filter( participant => participant.hasOwnProperty('ranks') );
    const comments = props.comments || [];
    //let activeSubTab = props.activeSubTab;

    console.log("bello");
    console.log(teilnehmerInnenzahl);

    console.log("subcomp comments filtered: " +  JSON.stringify(comments.filter( comment => comment.thema==="Jury" )));

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

    return(
        <div style={{marginTop: 50}} >
                <Tabs>
                    {subcompetitions.map( (subcomp, index) => 
                        <TabPane tab={subcomp} key={subcomp}>
                            <CompetingDisplay  participants={subcompParticipants[subcomp] || []} awards={awards.filter( award => award.wettbewerbskontext===subcomp )} numOfParticipants={numOfParticipants.filter( amount => amount.wettbewerbskontext===subcomp )} />
                        </TabPane>
                    )}
                </Tabs>
            </div>

    );
}