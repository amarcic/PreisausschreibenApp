import React from 'react';
import { Row, Col, List, Tag, Tabs, Icon, Popover } from 'antd';
import { Link } from 'react-router-dom';

import Tasks from './Tasks';
import Prerequisits from './Prerequisits';
import NumberOfParticipants from './NumberOfParticipants';
//import withCommentContainer from './withCommentContainer'; 

const TabPane = Tabs.TabPane;

//const PrerequisitsWithCommentContainer = withCommentContainer(Prerequisits);

export default function TaskTabs( props ) {

    //const participants = props.participants;
    const subcompetitions = props.subcompetitions;
    const tasks = props.tasks;
    //const rankedParticipants = props.ranked;
    //const awards = props.awards;
    const conditions = props.conditions;
    //const teilnehmerleistungen = props.teilnehmerleistungen;
    //const amountPatricipants = props.teilnehmerInnenzahl;
    //const awardedParticipants = participants.filter( participant => participant.hasOwnProperty('ranks') );
    //const comments = props.comments;
    //let activeSubTab = props.activeSubTab;

    //console.log("subcomp comments filtered: " +  JSON.stringify(comments.filter( comment => comment.thema==="Jury" )));


    const taskBySubComp = {};
    console.log(tasks);
    //for each subcompetition there should be a value on the object taskBySubComp, so with the string for the subcomp the task value can be accessed for display
    tasks.forEach( task => !taskBySubComp[task.wettbewerbskontext]? taskBySubComp[task.wettbewerbskontext]=[{ aufgabentyp: [task.aufgabentyp], spezifizierung: [task.spezifizierung] }] : taskBySubComp[task.wettbewerbskontext].push({ aufgabentyp: [task.aufgabentyp], spezifizierung: [task.spezifizierung] }) );
    console.log(taskBySubComp);

    return(
        <div style={{marginTop: 50}} >
            <h3>Aufgaben</h3>
                <Tabs>
                    {subcompetitions.map( (subcomp) =>
                        <TabPane tab={subcomp} key={subcomp}>
                            {taskBySubComp.hasOwnProperty(subcomp)&&
                            <Tasks tasks={taskBySubComp[subcomp]} conditions={conditions }/>}
                            
                            {/*<Row>
                                <Col span={20} offset={1}>
                                    <div>{taskBySubComp[subcomp].map( (subcompEntry, index) => <p key={index} > {subcompEntry.spezifizierung} <br /> {subcompEntry.aufgabentyp} </p>  )}</div>
                                </Col>
                            </Row>}
                            <Row>
                                <Col>
                                    {conditions && <Prerequisits conditions={conditions} /> }
                                </Col>
                            </Row>*/}
                        </TabPane>    
                    )}


                    
                </Tabs>
            </div>

    );
}