import React from 'react';
import { Row, Col, List, Tag, Tabs, Icon, Popover } from 'antd';
import { Link } from 'react-router-dom';


import Prerequisits from './Prerequisits';
import NumberOfParticipants from './NumberOfParticipants';
import withCommentContainer from './withCommentContainer'; 

const TabPane = Tabs.TabPane;

const PrerequisitsWithCommentContainer = withCommentContainer(Prerequisits);

export default function TaskTabs( props ) {

    //const participants = props.participants;
    const subcompetitions = props.subcompetitions;
    const tasks = props.tasks;
    //const rankedParticipants = props.ranked;
    //const awards = props.awards;
    const conditions = props.teilnahmevoraussetzungen;
    //const teilnehmerleistungen = props.teilnehmerleistungen;
    const amountPatricipants = props.teilnehmerInnenzahl;
    //const awardedParticipants = participants.filter( participant => participant.hasOwnProperty('ranks') );
    const comments = props.comments;
    //let activeSubTab = props.activeSubTab;

    //console.log("subcomp comments filtered: " +  JSON.stringify(comments.filter( comment => comment.thema==="Jury" )));

    /*
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
    */
    //console.log(subcompParticipants);

    const taskBySubComp = {};

    //for each subcompetition there should be a value on the object taskBySubComp, so with the string for the subcomp the task value can be accessed for display
    tasks.forEach( task => !taskBySubComp[task.wettbewerbskontext]? taskBySubComp[task.wettbewerbskontext]=[{ type: [task.aufgabentyp], text: [task.spezifizierung] }] : taskBySubComp[task.wettbewerbskontext].push({ type: [task.aufgabentyp], text: [task.spezifizierung] }) );

    return(
        <div style={{marginTop: 50}} >
                <Tabs>
                    {subcompetitions.map( (subcomp, index) => 
                        <TabPane tab={subcomp} key={subcomp}>
                        {  }
                        { subcompParticipants[subcomp] && subcompParticipants[subcomp].filter( participant => participant.rolle.indexOf( "Jurymitglied" )>=0 ).length>1
                             && <MemberListJuryWithCommentContainer juryMembers={ subcompParticipants[subcomp].filter( participant => participant.rolle.indexOf( "Jurymitglied" ) >= 0 ) } comments={comments.filter( comment => comment.thema==="Jury" || comment.thema === "Beurteilung" ) } /> 
                        }
                        {/*award.wettbewerbskontext && award.wettbewerbskontext===subcomp&&*/
                            awards.find( award => award.wettbewerbskontext===subcomp) && <AwardsListWithCommentContainer awards={awards.filter( award => award.wettbewerbskontext===subcomp) } awardedParticipants={awardedParticipants.filter( participant => participant.wettbewerbskontext.indexOf(subcomp)>-1 )} comments={comments.filter( comment => comment.thema === "Auszeichnungen" || comment.thema === "PreisträgerInnen" )} />
                        }
                        { subcompParticipants[subcomp] && <ContestantListWithCommentContainer contestants={participants.filter( participant => !participant.hasOwnProperty('ranks') && participant.wettbewerbskontext.indexOf(subcomp)>-1 ) } comments={comments.filter( comment => comment.thema === "TeilnehmerInnen" )} /> }                 
                        { teilnahmevoraussetzungen && teilnahmevoraussetzungen.filter( criterion => criterion.wettbewerbskontext === subcomp).length > 0
                        && <PrerequisitsWithCommentContainer prereqs={teilnahmevoraussetzungen.filter( criterion => criterion.wettbewerbskontext === subcomp)} comments={comments.filter( comment => comment.thema === "Teilnahmevoraussetzungen" )} /> }
                        { teilnehmerInnenzahl && teilnehmerInnenzahl.filter( amount => amount.wettbewerbskontext === subcomp).length > 0
                            && <NumberOfParticipants numOPart={ teilnehmerInnenzahl.filter( amount => amount.wettbewerbskontext === subcomp ) } />

                        }
                        </TabPane>
                    )}
                </Tabs>
            </div>

    );
}