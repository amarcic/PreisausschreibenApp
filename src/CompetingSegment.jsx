import React from 'react';
import { Row, Col, Collapse, Drawer, Button, Badge } from 'antd';

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
    const showDrawer = props.showDrawer;
    const comments = props.comments;

    return(
        <div>
            <h2>Konkurrenzblock { comments && comments.length>0 ? <span style={{float: "right"}} ><Badge count={comments.length} ><Button type="normal" onClick={showDrawer} >Ergänzende Informationen</Button></Badge></span> : "" }</h2>
            { subcompetitions && <SubcompetitionTabs subcompetitions={subcompetitions}  participants={ participants.filter( participant => participant.wettbewerbskontext ) } awards={awards} numOfParticipants={numOfParticipants} teilnehmerInnenzahl={numOfParticipants} /> }
            { !subcompetitions && 
                <div style={{marginTop: 50}}>
                    <CompetingDisplay participants={participants} numOfParticipants={numOfParticipants.filter( nop => !nop.hasOwnProperty("wettbewerbskontext") )} awards={awards} />

                </div>
            }
            { subcompetitions && (juryNoContext.length>0 || contestantNoContext.length>0 ) && <div style={{marginTop: 30}}>
                <h3>Nicht eindeutig Teilwettbewerben zuzuordnen</h3>
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
            { comments && comments.length>0 && <Drawer 
                    title="Ergänzende Informationen zu den Ereignissen"
                    placement="right"
                    closable={false}
                    onClose={props.onClose}
                    visible={props.visible}
                    width="30%"
                    
                >
                    {comments.map( (comment, index) => <p key={index}>{comment.text}</p> )}
                </Drawer>}
        </div>
    );

}