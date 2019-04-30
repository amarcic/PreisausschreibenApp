import React from 'react';
import { Row, Col, Collapse } from 'antd';

import CompetingDisplay from './CompetingDisplay';
import SubcompetitionTabs from './SubcompetitionTabs';
import MemberListJury from './MemberListJury';
import ContestantList from './ContestantList';

const Panel = Collapse.Panel;

export default function CompetingSegment( props ) {

    const awards = props.awards;
    const participants = props.participants;
    const numOfParticipants = props.numOfParticipants || [];
    const subcompetitions = props.subcompetitions || undefined;
    const juryNoContext = participants.filter( participant => participant.rolle.indexOf( "Jurymitglied" )>=0 && !participant.hasOwnProperty('wettbewerbskontext') );
    const contestantNoContext = participants.filter( participant => participant.rolle.indexOf( "TeilnehmerIn" )>=0 && !participant.hasOwnProperty("wettbewerbskontext") );

    return(
        <div>
            { subcompetitions && <SubcompetitionTabs subcompetitions={subcompetitions}  participants={ participants.filter( participant => participant.wettbewerbskontext ) } awards={awards} numOfParticipants={numOfParticipants} teilnehmerInnenzahl={numOfParticipants} /> }
            { !subcompetitions && 
                <div style={{marginTop: 50}}>
                    <CompetingDisplay participants={participants} numOfParticipants={numOfParticipants.filter( nop => !nop.hasOwnProperty("wettbewerbskontext") )} awards={awards} />

                </div>
            }
            { subcompetitions && (juryNoContext.length>0 || contestantNoContext.length>0 ) && <div>
                <h3>nicht eindeutig Teilwettbewerben zuzuordnen</h3>
                <Collapse bordered={false}>
                    {juryNoContext.length>0 &&
                        <Panel header={"Jury"}>
                            <Row>
                                <Col span={20} offset={1}>
                                    <MemberListJury juryMembers={juryNoContext} />
                                </Col>
                            </Row>
                        </Panel>
                    }
                    {contestantNoContext.length>0 &&
                        <Panel header={"weitere Teilnehmer"}>
                            <Row>
                                <Col span={20} offset={1}>
                                <ContestantList contestants={contestantNoContext} />
                                </Col>
                            </Row>
                        </Panel>
                    }
                </Collapse>
            </div> }
        </div>
    );

}